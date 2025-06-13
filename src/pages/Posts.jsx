//import posts from '../content/posts.json';

/* DATABASE */
import supabase from "../config/supabaseClient";

/* REACT */
import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Container, Loader, Center } from "@mantine/core";

/* COMPONENTS */
import PostList from "../components/PostList";
import PostContent from '../components/PostContent';
import SearchInput from "../components/SearchInput";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Posts() {
    const { id } = useParams();
    const query = useQuery();
    const tag = query.get('tag');
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [content, setPostContent] = useState(null);
    const [loading, setLoading] = useState(true);
 
    const getPostsTags = useCallback(async (articles) => {
        return Promise.all(
            articles.map(async (post) => {
                const { data: tags, error: tagsError } = await supabase
                    .from('article_tag')
                    .select('tags(tag)')
                    .eq('article_id', post.id);
                
                if (tagsError) {
                    console.error(tagsError);
                    return { ...post, tags: [] };
                }
                
                return {
                    ...post,
                    tags: tags.map((tag) => tag.tags.tag) || []
                };
            })
        );
    }, []);

    const getPostContent = useCallback(async (id) => {
        if (id) {
            console.log(`Loading markdown for article ${id}`);
            const { data, error } = await supabase.from('markdown').select('content').eq('article_id', id).single();
            if (error || !data) {
                setPostContent(null);
                setPosts([]);
                navigate('/error', { state: { message: "Content for this article couldn't be loaded.." } });
                return;
            }
            setPostContent(data.content);
            setLoading(false);
            setPosts([]);
        }
    }, []);

    const getPostsUsingTag = useCallback(async (tag) => {
        if (tag) {
            console.log(`Filtering by tag: ${tag}`);
            const { data: articles, error: articlesError } = await supabase
                .rpc('get_articles_by_tag', { tag_name: tag });
                
            if (articlesError || !articles) {
                setPosts([]);
                navigate('/error', { state: { message: "Unexpected error when retrieving articles.." } });
                return;
            }
            
            const postsWithTags = await getPostsTags(articles); 
            setPosts(postsWithTags);
            setLoading(false);
        }
    }, [getPostsTags]);

    useEffect(() => {
        const load = async () => {
            if (id) {
                await getPostContent(id);
                return;
            }

            if (tag) {
                await getPostsUsingTag(tag);
                return;
            }

            try {
                const { data: articles, error: articlesError } = await supabase.from('articles').select();
                if (articlesError) throw articlesError;
                if (!articles) return;
                
                const postsWithTags = await getPostsTags(articles); 
                setPosts(postsWithTags);
                setLoading(false);
            } catch (error) {
                navigate('/error', { state: { message: "Unexpected error loading articles.." } });
                setPosts([]);
            }
        };

        load();
    }, [id, tag, getPostsUsingTag, getPostContent, getPostsTags]);

    return (
        //ml-36 mr-14 mt-6
        <section id="posts" className="my-10 flex flex-col items-center gap-5 p-4">
            {(!id) ? <SearchInput /> : <></>}
            {(loading) ? <Container my="xl" size="sm">
            <Center>
                <Loader />
            </Center>
          </Container> : <></>}
            {(tag) ? <div>
                <h2 className="text-gray-400 font-bold font-sans text-4xl mb-2">Tag: {tag}</h2>
                <hr className="mb-5 text-gray-400"/>
            </div>
            : <></>}
            {(id) ? <PostContent content={content} /> : <PostList posts={posts}/>}
        </section>
    );
}

export default Posts;
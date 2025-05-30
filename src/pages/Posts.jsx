//import posts from '../content/posts.json';

/* DATABASE */
import supabase from "../config/supabaseClient";

/* REACT */
import { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

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
    const [fetchError, setFetchError] = useState(null);
    const [posts, setPosts] = useState([]);
    const [content, setPostContent] = useState(null);
 
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
                setFetchError("Couldn't load article");
            }
            setPostContent(data.content);
            setPosts([]);
            setFetchError(null);
        }
    }, []);

    const getPostsUsingTag = useCallback(async (tag) => {
        if (tag) {
            console.log(`Filtering by tag: ${tag}`);
            const { data: articles, error: articlesError } = await supabase
                .rpc('get_articles_by_tag', { tag_name: tag });
                
            if (articlesError || !articles) {
                setPosts([]);
                setFetchError("No articles with such tag.");
                return;
            }
            
            const postsWithTags = await getPostsTags(articles); 
            setPosts(postsWithTags);
            setFetchError(null);
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
                setFetchError(null);
            } catch (error) {
                setFetchError("Couldn't fetch posts...");
                setPosts([]);
            }
        };

        load();
    }, [id, tag, getPostsUsingTag, getPostContent, getPostsTags]);

    return (
        //ml-36 mr-14 mt-6
        <section id="posts" className="my-10 flex flex-col items-center gap-5 p-4">
            {(!id) ? <SearchInput /> : <></>}
            {(tag) ? <div>
                <h2 className="text-gray-400 font-bold font-sans text-4xl mb-2">Tag: {tag}</h2>
                <hr className="mb-5 text-gray-400"/>
            </div>
            : <></>}
            {fetchError && <p>{fetchError}</p>}
            {(id) ? <PostContent content={content} /> : <PostList posts={posts}/>}
        </section>
    );
}

export default Posts;
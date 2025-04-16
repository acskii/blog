import PostList from "../components/PostList";
import posts from '../content/posts.json';
import { useParams, useSearchParams } from "react-router-dom";
import PostContent from '../components/PostContent';
import { useLocation } from 'react-router-dom';
import SearchInput from "../components/SearchInput";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function getPostById(id) {
    const res = posts.filter(post => post.id == id);
    return (res.length) ? res[0].content : null;
}

function getPostsByTag(tag) {
    const res = posts.filter(post => post.tags.includes(tag));
    return (res.length) ? res : [];
}

function Posts() {
    const { id } = useParams();
    const query = useQuery();
    const tag = query.get('tag');
    const tagContent = (tag) ? getPostsByTag(tag) : [];
    const content = (id) ? getPostById(id) : null;

    return (
        //ml-36 mr-14 mt-6
        <section id="posts" className="my-10 flex flex-col items-center gap-5 p-4">
            {(!id) ? <SearchInput /> : <></>}
            {(tag) ? <div>
                <h2 className="text-gray-400 font-bold font-sans text-4xl mb-2">Tag: {tag}</h2>
                <hr className="mb-5 text-gray-400"/>
            </div>
            : <></>}
            {(id) ? <PostContent content={content} /> : <PostList posts={(tag) ? tagContent : posts}/>}
        </section>
    );
}

export default Posts;
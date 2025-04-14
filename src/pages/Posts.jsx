import ContentIndent from "../components/ContentIndent";
import PostList from "../components/PostList";
import posts from '../content/posts.json';
import { useParams } from "react-router-dom";
import PostContent from '../components/PostContent';

function getPostById(id) {
    const res = posts.filter(post => post.id == id);
    return (res.length) ? res[0].content : null;
}

function Posts() {
    const { id } = useParams();
    const content = (id) ? getPostById(id) : null;

    return (
        //ml-36 mr-14 mt-6
        <section id="posts" className="mb-20">
        {(!id) ? <div className="mt-10 mr-24 ml-24">
            <h2 className="text-gray-400 font-bold font-sans text-4xl mb-2">Posts</h2>
            <hr className="mb-5 text-gray-400"/>
        </div>
        : <></>}
            <ContentIndent>
                {(id) ? <PostContent content={content} /> : <PostList />}
            </ContentIndent>
        </section>
    );
}

export default Posts;
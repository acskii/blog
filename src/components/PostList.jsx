import posts from '../content/posts.json';
import PostCard from './PostCard';

function PostList() {
    return (
        <section id="post-list" className="flex flex-col gap-2 items-center justify-start mb-22">
            {posts.length && posts.map(post => {
                return <PostCard post={post}/>
            })} 
        </section>
    );
}

export default PostList;
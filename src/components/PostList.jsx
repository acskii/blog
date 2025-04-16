import PostCard from './PostCard';

function PostList({posts}) {
    return (
        <section id="post-list" className="flex flex-col gap-5 items-center justify-start w-sm md:w-lg">
            {posts.map(post => {
                return <PostCard post={post}/>
            })} 
        </section>
    );
}

export default PostList;
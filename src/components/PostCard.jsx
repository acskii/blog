import {Link} from 'react-router-dom';

function PostCard({post}) {
    const postLink = `/posts/${post.id}`;

    return (
    <div className="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            {post.title}
            </h3>
            <p className="mt-2 text-gray-500 dark:text-neutral-400">
            Written by {post.author}
            </p>
            <p className="font-semibold">
                <Link to={postLink} className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white">Read post &rarr;</Link>
            </p>
            <div className="flex flex-row gap-2">
                {post.tags.map(tag => {
                    return <div class="badge badge-outline badge-accent">{tag}</div>
                })}
            </div>
        </div>
        <div className="bg-gray-100 border-t border-gray-200 rounded-b-xl py-3 px-4 md:py-4 md:px-5 dark:bg-neutral-900 dark:border-neutral-700">
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
            Uploaded on {post.date}
            </p>
        </div>
    </div>
    );
}

export default PostCard;
import {Link} from 'react-router-dom';
import TagList from './TagList';

function PostCard({post}) {
    const postLink = `/posts/${post.id}`;

    return (
    <div className="w-full flex flex-col bg-base-200 border border-zinc-200 shadow-2xs rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
        <div className="p-4 md:p-5 text-base-content flex flex-row gap-2 justify-between">
            <div class="flex flex-col">
                <h3 className="text-lg font-bold">
                {post.title}
                </h3>
                <p>
                Written by {post.author}
                </p>
                <p className="font-semibold mt-2">
                    <Link to={postLink} className="underline decoration-secondary underline-offset-3 hover:decoration-2 dark:text-white">Read post &rarr;</Link>
                </p>
            </div>
            <TagList tags={post.tags} />
        </div>
        <div className="bg-secondary border-t border-zinc-200 rounded-b-xl py-3 px-4 flex flex-row justify-between">
            <p className="text-base-content text-sm">
                Updated on {post.date}
            </p>
            <p className="text-base-content text-sm">
                Uploaded on {post.date}
            </p>
        </div>
    </div>
    );
}

export default PostCard;
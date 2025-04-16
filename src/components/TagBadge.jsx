import { Link } from "react-router-dom";

function TagBadge({text}) {
    const tagLink = `/posts?tag=${text}`;

    return (
        <Link to={tagLink}>
            <div class="badge border border-zinc-500 text-base-content font-bold badge-neutral badge-outline">{text}</div>
        </Link>
    );
}

export default TagBadge;
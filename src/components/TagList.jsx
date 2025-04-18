import TagBadge from "./TagBadge";

function TagList({tags}) {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {tags.map((tag, i) => {
            return <TagBadge text={tag} key={i}/>
        })}
    </div>
    );
}

export default TagList;
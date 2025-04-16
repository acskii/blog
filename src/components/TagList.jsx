import TagBadge from "./TagBadge";

function TagList({tags}) {
    return (
    <div className="grid grid-cols-3 content-start gap-2">
        {tags.map((tag, i) => {
            return <TagBadge text={tag} key={i}/>
        })}
    </div>
    );
}

export default TagList;
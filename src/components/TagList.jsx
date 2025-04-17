import TagBadge from "./TagBadge";

function TagList({tags}) {
    return (
    <div className="flex flex-row justify-start items-start gap-4">
        {tags.map((tag, i) => {
            return <TagBadge text={tag} key={i}/>
        })}
    </div>
    );
}

export default TagList;
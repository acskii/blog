import { useEffect } from 'react';
import posts from '../content/posts.json'

function PostCount() {
    
    //useEffect(() => {}, {});

    return (
      <div>
        <h3 className="inline m-0 bg-white font-bold text-black p-3 rounded-l-lg">{posts.length}</h3>
        <h4 className="inline m-0 bg-gray-950 p-3 text-white font-bold rounded-r-lg"> Posts!</h4>
      </div>
    );
}

export default PostCount;
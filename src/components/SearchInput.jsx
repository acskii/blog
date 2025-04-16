import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchInput() {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const trimmed = query.trim();
        if (trimmed !== '') {
            navigate(`/posts?tag=${encodeURIComponent(trimmed)}`);
        } else if (trimmed === '') {
            navigate('/posts');
        }
    };

    return (
    <label className="input self-auto md:w-lg text-base-content">
        <input type="search" className="grow" placeholder="Search by " value={query} onChange={(e) => setQuery(e.target.value)}/>
        <kbd className="kbd kbd-sm">TAG</kbd>
        <button className="btn btn-ghost m-0 p-1" onClick={handleSearch}>        
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        </button>
    </label>
    );
}

export default SearchInput;
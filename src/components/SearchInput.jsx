import { ActionIcon, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
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
    <TextInput className="self-auto md:w-lg"
        radius="l"
        aria-label="search posts by tag"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        size="md"
        placeholder="Search tag"
        rightSection={
            <ActionIcon onClick={handleSearch}>
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            </ActionIcon>
        }
    />
    );
}

export default SearchInput;
import {useState, useMemo} from 'react';

export const useFiltredPosts = (posts, category) => {
    const [currentPosts] = useState([...posts]);

    const filtredPosts = useMemo(() => {
        if(category.toLowerCase() !== 'All Posts'.toLowerCase()) {
            return [...currentPosts].filter(post => post.category.toLowerCase().includes(category.toLowerCase()));
        }
        return posts;
    }, [category, currentPosts]);

    return filtredPosts;
}
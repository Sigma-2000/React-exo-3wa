import { useState } from 'react';
import { usePostContext } from '../utils/postContext';

function PostForm() {
    const [{error},dispatch] = usePostContext();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() !== '' && description.trim() !== '') {
            const newPost = { id: Date.now(), title, description };
            dispatch({ type: 'ADD_POST', payload: newPost });
            setTitle('');
            setDescription('');
            if(error) {
                dispatch({type: 'SET_ERROR', payload: ""});
            }
        } else {
            dispatch({type: 'SET_ERROR', payload: "Impossible d'ajouter le post car il n'y a pas de contenu"});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <span style={{color: 'red'}}>{error}</span>}
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Titre"
            />
            <textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Description"
            ></textarea>
            <button type="submit">Ajouter un post</button>
        </form>
    );
}

export default PostForm;
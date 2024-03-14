
import { usePostContext } from '../utils/postContext';

function PostsList() {
    const [state, dispatch] = usePostContext();

    return (
        <ul>
            {state.posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <button onClick={() => dispatch({ type: 'REMOVE_POST', payload: post.id })}>
                        Supprimer
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default PostsList;
import { createContext, useReducer, useContext } from 'react';
import { postReducer, initialState } from '../reducer/postReducer';

export const PostContext = createContext();

const postConsumer = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);
  return [state, dispatch];
}

export const usePostContext = () => {
  const { value } = useContext(PostContext);
  return value; 
}
//consumer peut étre mid dans le provider en faite et passer state et dispatch direct voir openOF et corr
const PostContextProvider = ({ children }) => {
  const value = postConsumer();

  return (
    <PostContext.Provider value={{value}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider
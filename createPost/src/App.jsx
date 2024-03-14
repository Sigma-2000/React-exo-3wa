import PostForm from './components/PostForm';
import PostsList from './components/PostList';

function App() {
  return (
      <div className="App">
        <h1>Gestion de Posts</h1>
        <PostForm />
        <PostsList />
      </div>
  );
}

export default App;

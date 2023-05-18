import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import CreatePost from './pages/CreatePost';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App
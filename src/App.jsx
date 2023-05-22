import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import CreatePost from './pages/CreatePost';
import { useSelector } from 'react-redux';


const App = () => {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<Main />} />
      </Routes>
    </>
  );
}

export default App
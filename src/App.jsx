import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Contact from './Contact';
import Navbar from './components/Navbar';
import Form from './Form';

const App = () => {

  const [datas, setDatas] = useState([])

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => setDatas(json));

  }, [])

  // console.log(datas)

  return (
    <>

      <Form/>

      {/* <h1>Welcome to React Router! </h1> */}

      {/* {datas.map((data) => (
        <div key={data.id} className="">
          <h1>{data.id}</h1>
        </div>
      ))} */}

      {/* <Navbar/>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App
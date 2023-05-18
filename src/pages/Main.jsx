import React, { useState } from 'react'
import Layout from '../Layout'
import { Link } from 'react-router-dom';


const Main = () => {

  return (
    <Layout>
      <Link to="/post/create">Create Post</Link>
    </Layout>
  );
}

export default Main
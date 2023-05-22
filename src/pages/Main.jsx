import React, { useState } from 'react'
import Layout from '../Layout'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useGetNoteQuery } from '../features/slice/apiSlice';
import Markdown from '../components/Markdown';

const Main = () => {

  const {id} = useParams()

  const {data, isLoading} = useGetNoteQuery(id)

  if(isLoading) {
    return <h1>Loading..</h1>
  }

  console.log(data)

  console.log(id);

  return (
    <Layout>
      <div className=" prose mx-auto mt-5">
        <Link className=" bg-lime-400 px-3 py-2 rounded-xl" to="/post/create">
          Create Post
        </Link>
        <Markdown markdown={data.description} />
      </div>
    </Layout>
  );
}

export default Main
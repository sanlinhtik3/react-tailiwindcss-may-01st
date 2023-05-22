import React from 'react'
import NavLink from './NavLink'
import { useGetNotesQuery } from '../features/slice/apiSlice';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const { data, isLoading } = useGetNotesQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className=" p-5">
        <h1 className=" text-xl mb-3">Inficreax note</h1>

        {data.map((d) => (
          <Link to={`/post/${d._id}`}>
            <NavLink key={d._id} name={d.title} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Sidebar
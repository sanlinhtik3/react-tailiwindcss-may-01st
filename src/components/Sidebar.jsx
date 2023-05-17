import React from 'react'
import NavLink from './NavLink'

const Sidebar = () => {
  return (
    <>
      <div className=" p-5">
        <h1 className=" text-xl mb-3">Inficreax note</h1>
        <NavLink active="bg-lime-400" name="Aung Gyi" />
        <NavLink name="Aung Lay" />
      </div>
    </>
  );
}

export default Sidebar
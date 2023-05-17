import React from 'react'

const NavLink = ({ active, name }) => {
  return (
    <>
      <div className={`py-2 px-3 rounded-xl ${active}`}>
        <h6>{name}</h6>
      </div>
    </>
  );
}

export default NavLink
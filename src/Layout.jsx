import React from 'react'
import Sidebar from './components/Sidebar';




const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* cols-2 */}
        <div className="col-span-2 bg-slate-100 h-screen">
          <Sidebar />
        </div>

        {/* cols-10 */}
        <div className="col-span-10 bg-slate-200 h-screen">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout
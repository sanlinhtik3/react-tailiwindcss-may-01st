import React from 'react'
import Sidebar from './components/Sidebar';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
| apple | banan |
`;

const Layout = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        {/* cols-2 */}
        <div className="col-span-2 bg-slate-400 h-screen">
          <Sidebar />
        </div>

        {/* cols-10 */}
        <div className="col-span-10 bg-slate-200 h-screen">
          <div className="mx-auto prose">
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout
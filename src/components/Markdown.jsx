import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// const markdown = `A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |
// | apple | banan |
// `;

const Markdown = ({ markdown }) => {
  return (
    <>
      <div className="">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </div>
    </>
  );
};

export default Markdown;

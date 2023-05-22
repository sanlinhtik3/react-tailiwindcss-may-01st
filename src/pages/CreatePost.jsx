import React, { useState } from "react";
import Markdown from "../components/Markdown";
import TextInput from "../components/TextInput";
import Layout from "../Layout";

const CreatePost = () => {
  const [inputs, setInputs] = useState({});

  const hangelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Layout>
        <div className="mx-auto prose max-w-none grid grid-cols-2 gap-5 mt-5 px-20">
          <textarea
            name="description"
            value={inputs.description || ""}
            onChange={hangelChange}
            rows="10"
            className=" w-full p-3 outline-none rounded-xl"
          ></textarea>

          <div className=" bg-white p-3 rounded-xl">
            <Markdown markdown={inputs.description} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CreatePost;

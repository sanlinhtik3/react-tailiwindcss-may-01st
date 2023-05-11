import React from "react";

const TextInput = ({ className = "", ...props }) => {
  console.log(props);
  return (
    <>
      <input type="text" {...props} className={`hello he ${className}`} />
    </>
  );
};

export default TextInput;

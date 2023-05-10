import React, { useState } from 'react'

const Form = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs((prev) => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(inputs)
    };


  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          type="text"
        />
        <button>Sign</button>
      </form>
    </>
  );
}

export default Form
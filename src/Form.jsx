import React, { useState } from 'react'
import './cus.css'
import TextInput from './components/TextInput'

const Form = () => {

  const [inputs, setInputs] = useState({})

  const hangelChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }
  
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          value={inputs.email || ""}
          name="email"
          onChange={hangelChange}
          className="apple"
        />
        <button>Sign</button>
      </form>
    </>
  );
}

export default Form
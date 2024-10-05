import React from "react";
import { useMultiInputHook } from "./UseMultiInputHook";

function Form() {
  const { values, handleChange, resetValues } = useMultiInputHook({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your firstName"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your lastName"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <button type={"submit"}>Submit</button>
        <button onClick={resetValues}>Reset</button>
      </form>
    </>
  );
}

export default Form;

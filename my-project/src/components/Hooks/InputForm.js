import React, { useState } from "react";

function InputForm() {
  const [form, setForm] = useState({
    firstName: "John",
    lastName: "Jones",
    email: "aaa@gmail.com",
  });
  return (
    <>
      <label>First Name</label>
      <input
        type="text"
        value={form.firstName}
        onChange={(e) => {
          setForm({
            ...form,
            firstName: e.target.value,
          });
        }}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        value={form.lastName}
        onChange={(e) => {
          setForm({
            ...form,
            lastName: e.target.value,
          });
        }}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        value={form.email}
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </>
  );
}

export default InputForm;

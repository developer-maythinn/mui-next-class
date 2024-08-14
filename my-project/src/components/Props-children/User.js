import React from "react";

function User({ user }) {
  const { name, age } = user;
  return (
    <>
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default User;

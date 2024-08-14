import React from "react";

function Header(props) {
  console.log(props.name, props.text);
  const { name, text } = props;
  return (
    <>
      <div>{name}</div>
      <p>{text}</p>
    </>
  );
}
export default Header;

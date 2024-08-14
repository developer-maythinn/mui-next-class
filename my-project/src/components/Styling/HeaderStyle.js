import React from "react";
import "./HeaderStyle.css";

// const styles = { color: "yellow", fontSize: "30px" };

export const Nav = function Nav() {
  return <h1>This is Nav</h1>;
};

function Logo() {
  const logoImg = (
    <img
      src="https://images.pexels.com/photos/27143629/pexels-photo-27143629/free-photo-of-seagull.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="logo"
      style={{ width: "100px", height: "auto" }}
    />
  );
  return logoImg;
}

function HeaderStyle() {
  const mainColor = "pink";
  const styles = { color: mainColor, fontSize: "30px" };
  const result = <h1>Hello</h1>;
  const isMobile = true;
  const checkView = isMobile ? "Mobile view" : "Desktop View";
  return (
    <>
      <h1 style={styles} className="header-style">
        Heading 1
      </h1>
      {result}
      <p>{checkView}</p>
      <Nav />
      <Logo />
    </>
  );
}

export default HeaderStyle;

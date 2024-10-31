import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { BookContext } from "../context/BookContext";

function Nav() {
  const themeValue = useContext(ThemeContext);
  console.log(themeValue);
  const { isLightTheme, light, dark, toggleTheme } = themeValue;
  const theme = isLightTheme ? light : dark;
  console.log(theme);
  return (
    <>
      <nav className="nav-style" style={{ background: theme.ui }}>
        <ul>
          <li>
            <Link to="/" style={{ color: theme.syntax }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/book-shop" style={{ color: theme.syntax }}>
              Book Shop
            </Link>
          </li>
          <li>
            <Link to="/posts" style={{ color: theme.syntax }}>
             Posts
            </Link>
          </li>
          <li>
            <Link to="/posts-axios" style={{ color: theme.syntax }}>
             Posts Axios
            </Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>Change Theme</button>
      </nav>
    </>
  );
}

export default Nav;

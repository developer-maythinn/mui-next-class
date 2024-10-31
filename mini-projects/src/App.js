import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MiniProjects from "./pages/BookShop";
import Nav from "./components/Nav";
import ThemeContextProvider from "./context/ThemeContext";
import BookShop from "./pages/BookShop";
import Posts from "./pages/Posts";
import PostsWithAxios from "./pages/PostsWithAxios";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Nav />
        <Routes>
          <Route path="/book-shop" element={<BookShop />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts-axios" element={<PostsWithAxios />} ></Route>
        </Routes>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

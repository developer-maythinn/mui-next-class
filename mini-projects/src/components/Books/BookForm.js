import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

function BookForm() {
  const { addBook } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(author, title);
    setTitle("");
    setAuthor("");
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input type="submit" value="Add Book" />
      </form>
    </>
  );
}

export default BookForm;

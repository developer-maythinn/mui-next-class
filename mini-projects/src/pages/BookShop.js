import React from "react";
import BookContextProvider from "../context/BookContext";
import BooksList from "../components/Books/BooksList";
import BookForm from "../components/Books/BookForm";

function BookShop() {
  return (
    <>
      <BookContextProvider>
        <BookForm />
        <BooksList />
      </BookContextProvider>
    </>
  );
}

export default BookShop;

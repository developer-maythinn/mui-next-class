import { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider({ children }) {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "AA",
      author: "AA author",
    },
    {
      id: 2,
      title: "BB",
      author: "BB author",
    },
    {
      id: 3,
      title: "CC",
      author: "CC author",
    },
  ]);
  const addBook = (author, title) => {
    setBooks([...books, { id: Date.now(), author, title }]);
  };
  return (
    <BookContext.Provider value={{ books, addBook }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;

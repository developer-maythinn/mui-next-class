import React, { useContext } from "react";
import BookDetail from "./BookDetail";
import { BookContext } from "../../context/BookContext";
import { ThemeContext } from "../../context/ThemeContext";

function BooksList() {
  const { books, addBook } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <>
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax, padding: 20, marginTop: 20 }}
      >
        <ul>
          {books?.length > 0 ? (
            books.map((book) => {
              return (
                <React.Fragment key={book.id}>
                  <BookDetail book={book} theme={theme} />
                </React.Fragment>
              );
            })
          ) : (
            <>
              <h2>There is no book.</h2>
            </>
          )}
        </ul>
      </div>
    </>
  );
}

export default BooksList;

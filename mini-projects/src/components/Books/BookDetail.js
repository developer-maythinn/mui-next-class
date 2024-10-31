import React from 'react'

function BookDetail({book, theme}) {
  return (
    <li style={{background: theme.ui, padding: "5px 0", marginTop: 10}}>
      <h2>{book.title}</h2>
      <h4>{book.author}</h4>
    </li>
  )
}

export default BookDetail
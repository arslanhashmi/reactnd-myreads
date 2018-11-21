import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

function BooksGrid (props) {
  const { books, shelfOptions, onShelfChange } = props
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book
            book={book}
            shelfOptions={shelfOptions}
            onShelfChange={onShelfChange} />
        </li>
      ))}
    </ol>
  )
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired,
  shelfOptions: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BooksGrid

import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

function Book (props) {
  const { book, shelfOptions, onShelfChange } = props
  return (
    <div className="book">
      <div className="book-top">

        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}>
        </div>

        <BookShelfChanger
          book={book}
          shelfOptions={shelfOptions}
          onShelfChange={onShelfChange} />
        
      </div>
      <div className="book-title">
        {book.title}
      </div>
      <div className="book-authors">
        {book.authors}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelfOptions: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default Book

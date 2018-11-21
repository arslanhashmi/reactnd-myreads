import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

function BookShelf (props) {
  const { title, books, shelfOptions, onShelfChange } = props
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {title}
      </h2>
      <div className="bookshelf-books">
        <BooksGrid
          books={books}
          shelfOptions={shelfOptions}
          onShelfChange={onShelfChange} />
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  shelfOptions: PropTypes.object.isRequired
}

export default BookShelf

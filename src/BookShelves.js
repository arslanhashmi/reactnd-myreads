import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

function BookShelves (props) {
  const { books, shelfOptions, onShelfChange } = props
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          {/*
            Render the shelves with their respective books.
            */}
            {Object.keys(shelfOptions)
              .filter(shelfOption => shelfOption !== 'none')
              .map(shelfOption => (
                <BookShelf
                  key={shelfOption}
                  title={shelfOptions[shelfOption]}
                  books={books.filter(book => (
                    book.shelf === shelfOption
                  ))}
                  shelfOptions={shelfOptions}
                  onShelfChange={onShelfChange} />
              ))}
            </div>
          </div>

          <div className="open-search">
            <Link to='/search'>
              Add a book
            </Link>
          </div>

        </div>
      )
}

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelfOptions: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelves

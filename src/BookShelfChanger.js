import React from 'react'
import PropTypes from 'prop-types'

function BookShelfChanger (props) {
  const { book, shelfOptions, onShelfChange } = props
  return (
    <div className="book-shelf-changer">
      <select
        value={book.shelf}
        onChange={(event) => (
          onShelfChange(book, event.target.value)
        )}>
        <option value="none" disabled>
          Move to...
        </option>
        {Object.keys(shelfOptions).map(shelfOption => (
          <option key={shelfOption} value={shelfOption}>
            {shelfOptions[shelfOption]}
          </option>
        ))}
      </select>
    </div>
  )
}

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelfOptions: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelfChanger

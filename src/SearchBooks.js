import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'
import { DebounceInput } from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    shelfOptions: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  search = (query) => {
    BooksAPI.search(query, 20).then(response =>{
      /*
        Validate the response and see if we need to
        gracefully degrade in case of an error.
      */
      let results = []
      if (response && !response.hasOwnProperty('error')) {
        results = response
      }

      results = results.map(book => {
        /*
          By default, the books in the search results do not have their
          shelves set.
        */
        book.shelf = 'none'
        /*
          Now, update the current `MISLEADING` shelf attribute for all those
          books in the search results which are present in any of my book
          shelves.
        */
        this.props.myBooks.filter(myBook => myBook.id === book.id).map(myBook => {
          book.shelf = myBook.shelf
          return myBook
        })
        return book
      })

      // Update the search results state.
      this.setState(() => ({
        query: query,
        results: results
      }))
    })
  }

  render() {
    const { shelfOptions, onShelfChange } = this.props
    const { results } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
              */}
              <DebounceInput
                type="text"
                placeholder="Search by title or author"
                debounceTimeout={300}
                onChange={(event) => {
                  this.search(event.target.value)
                }} />

              </div>
            </div>
            <div className="search-books-results">
              <BooksGrid
                books={results}
                shelfOptions={shelfOptions}
                onShelfChange={onShelfChange} />
            </div>
          </div>
        )
  }
}

export default SearchBooks

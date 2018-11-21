import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelves from './BookShelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  static propTypes = {
    shelfOptions: PropTypes.object.isRequired
  }

  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => (
      this.setState(state => ({
        books: books
      }))
    ))
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      // Now, update the books' state as well.
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(prevBook => (
          prevBook.id !== book.id
        )).concat(book)
      }))
    })
  }

  render() {
    const { books } = this.state
    const { shelfOptions } = this.props
    return (
      <div className="app">
        <Route
          exact
          path='/'
          render={() => (
            <BookShelves
              books={books}
              shelfOptions={shelfOptions}
              onShelfChange={this.updateShelf} />
          )} />
          <Route
            exact
            path='/search'
            render={() => (
              <SearchBooks
                myBooks={books}
                shelfOptions={shelfOptions}
                onShelfChange={this.updateShelf} />
            )} />
          </div>
        )
  }
}

export default BooksApp

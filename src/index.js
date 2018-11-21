import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// These are the possible options for a book shelf dropdown.
const shelfOptions = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
  none: 'None'
}

ReactDOM.render(
  <BrowserRouter><App shelfOptions={shelfOptions}/></BrowserRouter>,
  document.getElementById('root')
)

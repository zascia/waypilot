import React from 'react'
import logo from '../logo.svg'

const NotFound = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>NOT FOUND</h2>
        <a
          className="App-link"
          href="/find"
          target="_blank"
          rel="noopener noreferrer"
        >
          Find a route
        </a>
      </header>
    </div>
  )
}

export default NotFound

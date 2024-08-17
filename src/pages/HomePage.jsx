import React from 'react'
import logo from '../logo.svg'

const HomePage = () => {
  console.log('in the home page')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test2
        </p>
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

export default HomePage

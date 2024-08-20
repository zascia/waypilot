import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../components/features/auth/authSlice'
import logo from '../logo.svg'

const HomePage = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <p>Welcome, {user.name}!</p>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </>
        ) : (
          <button onClick={() => dispatch(login({ name: 'Jane Doe' }))}>
            Login
          </button>
        )}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Test2
        </p>
        <a
          className="App-link"
          href="/intro"
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

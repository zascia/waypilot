import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import AppRouter from './router/AppRouter'
import './i18n'
import { useTranslation } from 'react-i18next'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  // TODO add translation to all hardcoded texts
  // TODO Move markup to the clean components where possible
  // TODO session tokens to make it faster and cheaper https://developers.google.com/maps/documentation/places/web-service/details?hl=ru#session_tokens
  // TODO ??? implement caching redis?
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <h2>{t('Welcome_to_WayPilot')}</h2>
      <button onClick={() => changeLanguage('en')}>en</button>
      <button onClick={() => changeLanguage('pl')}>pl</button>
      <button onClick={() => changeLanguage('ua')}>ua</button>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  )
}

export default App

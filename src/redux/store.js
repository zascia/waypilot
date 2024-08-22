import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/apiSlice'
import userReducer from '../components/features/IntroDetailsForm/userIntroDetailsSlice'
import routeDetailsReducer from '../components/features/RouteDetailsForm/routeDetailsSlice'
import authReducer from '../components/features/auth/authSlice'
// https://redux.js.org/usage/migrating-to-modern-redux

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: userReducer,
    routeDetails: routeDetailsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})
export default store

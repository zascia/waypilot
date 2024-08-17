// /redux/reducers/userReducer.js
import { SAVE_USER_DATA, CLEAR_USER } from '../actions/types'

const initialState = {
  userData: {},
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      }
    case CLEAR_USER:
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

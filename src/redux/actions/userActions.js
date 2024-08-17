// /redux/actions/userActions.js
import { SET_USER, CLEAR_USER, SAVE_USER_DATA, FETCH_USER_DATA } from './types'
import { saveUserData as saveUserDataApi } from '../../api/userApi'

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  }
}
export const saveUserData = (data) => async (dispatch) => {
  try {
    const response = await saveUserDataApi(data)
    if (response.status === 'ok') {
      dispatch({ type: SAVE_USER_DATA, payload: data })
    }
  } catch (error) {
    console.error('Error saving user data', error)
  }
}

export const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA,
  }
}

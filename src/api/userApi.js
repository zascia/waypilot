// /api/userApi.js
import api from './api'

export const saveUserData = async (data) => {
  const response = await api.post('/user/save', data)
  return response.data
}

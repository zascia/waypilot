// /containers/UserFormContainer.js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import UserForm from '../components/presentational/UserForm/UserForm'
import { saveUserData } from '../redux/actions/userActions'

const UserFormContainer = () => {
  const [formData, setFormData] = useState({
    carType: '',
    fuelType: '',
    fuelConsumption: '',
    restInterval: '',
    dailyDistance: '',
    familyTrip: false,
    findHotel: false,
    saveTrip: false,
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveUserData(formData))
    // Redirect to /find or other route as needed
  }

  return (
    <UserForm
      values={formData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  )
}

export default UserFormContainer

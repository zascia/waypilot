import React, { useState } from 'react'
import IntroDetailsForm from './IntroDetailsForm'
import { useGetRoutesQuery, useUpdateTodoMutation } from '../../../api/apiSlice'

const IntroDetailsFormContainer = () => {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { data: todos, isFetching, isSuccess } = useUpdateTodoMutation()
    // Redirect to /find or other route as needed
  }

  return (
    <div className="container mt-5">
      <h2>Plan Your Route</h2>
      <IntroDetailsForm
        values={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default IntroDetailsFormContainer

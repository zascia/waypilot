import React, { useState } from 'react'
import RouteDetailsForm from './RouteDetailsForm'
import { useGetRoutesQuery, useUpdateTodoMutation } from '../../../api/apiSlice'

const RouteFormContainer = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    nightStops: false,
    fuelStops: false,
    foodStops: false,
    step1Data: {},
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const {
    getRoutes: Routes,
    isLoading,
    isSuccess,
    isError,
  } = useGetRoutesQuery()

  /*return (
    <ul>
      {Routes.map((route) => (
        <li key={route.id}>{route.title}</li>
      ))}
    </ul>
  )*/
  const handleSubmit = async (formData) => {
    try {
      await Routes(formData).unwrap()
      console.log('Route API called successfully')
    } catch (err) {
      console.error('Failed to call route API', err)
    }
  }

  return (
    <div className="container mt-5">
      <h2>Plan Your Route</h2>
      {isLoading && <h3>Loading...</h3>}
      {isSuccess && <h3>Route found successfully!</h3>}
      {isError && <p>Error retrieving a route</p>}
      <RouteDetailsForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default RouteFormContainer

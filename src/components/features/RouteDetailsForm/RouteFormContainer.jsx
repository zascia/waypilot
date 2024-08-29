import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateFrom, updateTo, toggleSwitcher } from './routeDetailsSlice'
import RouteDetailsForm from './RouteDetailsForm'
import {
  useGetRoutesMutation,
  useUpdateTodoMutation,
} from '../../../api/apiSlice'

const RouteFormContainer = () => {
  const { from, to, nightStops, fuelStops, foodStops } = useSelector(
    (state) => state.routeDetails,
  )
  const dispatch = useDispatch()
  const [getRoutes, { isLoading, data, error }] = useGetRoutesMutation()
  const navigate = useNavigate()

  const onChangeFrom = ({ place_id }) => {
    dispatch(updateFrom(place_id))
  }
  const onChangeTo = ({ place_id }) => {
    dispatch(updateTo(place_id))
  }
  const onChangeSwitcher = (e) => {
    dispatch(toggleSwitcher(e.target.name))
  }

  const onSubmit = async (e) => {
    //e.preventDefault();
    try {
      const response = await getRoutes({ from, to }).unwrap()
      console.log('Success:', response.data.routes[0])
      // Call google map and hotel details in a new page to avoid of double google script loading
      navigate('/route-details', {
        state: {
          routeDetails: response.data,
        },
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="container mt-5">
      <h2>Plan Your Route</h2>
      <RouteDetailsForm
        onChangeFrom={onChangeFrom}
        onChangeTo={onChangeTo}
        onChangeSwitcher={onChangeSwitcher}
        onSubmit={onSubmit}
        switchers={{ nightStops, fuelStops, foodStops }}
      />
    </div>
  )
}

export default RouteFormContainer

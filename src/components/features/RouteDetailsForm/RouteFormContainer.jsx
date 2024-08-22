import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateFrom, updateTo, toggleSwitcher } from './routeDetailsSlice'
import RouteDetailsForm from './RouteDetailsForm'
import MapComponent from '../../common/RouteMap'
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
      console.log('Success:', response.routes[0])
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="container mt-5">
      <h2>Plan Your Route</h2>
      <div>
        {isLoading && <h3>Route is Loading...</h3>}
        {error && <h3>Error loading routes</h3>}
        {!!data && <MapComponent routeData={data?.data?.routes[0]} />}
      </div>
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

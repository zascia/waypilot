import React from 'react'
import { useLocation } from 'react-router-dom'
import RouteDetailsResultContainer from '../components/features/RouteDetailsResult/RouteDetailsResultContainer'

const RouteDetailsPage = () => {
  const location = useLocation()
  const { routeDetails } = location.state
  return (
    <div>
      <RouteDetailsResultContainer routeDetails={routeDetails} />
    </div>
  )
}

export default RouteDetailsPage

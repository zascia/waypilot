import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MapComponent from '../../common/RouteMap'

const RouteDetailsResultContainer = ({ routeDetails }) => {
  console.log('routeDetails', routeDetails)
  return (
    <div className="container mt-5">
      <h1>Route Details</h1>
      <MapComponent routeData={routeDetails.routes[0]} />

      <h2>Nearby Hotels</h2>
      <ul>
        {routeDetails.hotels.results.map((hotel, index) => (
          <li key={index}>
            <img alt="" src={hotel.name} />
            {hotel.name} <address>{hotel.vicinity}</address>
            <blockquote>Rating: {hotel.rating}</blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}

RouteDetailsResultContainer.propTypes = {
  routeDetails: PropTypes.object,
}

export default RouteDetailsResultContainer

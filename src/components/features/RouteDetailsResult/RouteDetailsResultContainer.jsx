import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { setSelectedHotel } from './routeResultSlice'
import { useGetHotelRecommendationMutation } from '../../../api/apiSlice'
import MapComponent from '../../common/RouteMap'

const RouteDetailsResultContainer = ({ routeDetails }) => {
  const routes = routeDetails.routes
  const hotels = routeDetails.hotels.results
  console.log('routes', routes)
  console.log('hotels', hotels)

  const dispatch = useDispatch()
  const { selectedHotel } = useSelector((state) => state.routeResults)
  const [getHotelRecommendation, { isLoading, data, error }] =
    useGetHotelRecommendationMutation()
  const onGetRecommendationClick = async () => {
    try {
      const response = await getHotelRecommendation(hotels).unwrap()
      console.log('Recommendation:', response.recommendation)
      dispatch(setSelectedHotel(response.recommendation)) // Put recommendation into state
    } catch (err) {
      console.error('Error fetching recommendation:', err)
    }
  }

  return (
    <div className="container mt-5">
      <h1>Route Details</h1>
      <MapComponent routeData={routes[0]} />

      <h2>Nearby Hotels</h2>
      <button
        type="button"
        className="btn btn-warning"
        onClick={onGetRecommendationClick}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Recommend me'}
      </button>

      {data && (
        <div className="alert alert-success mt-3">
          <h4>Recommended Hotel:</h4>
          <p>{selectedHotel}</p>
        </div>
      )}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {hotels.map((hotel, index) => (
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

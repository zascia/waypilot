import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { setSelectedHotel } from './routeResultSlice'
import { useGetHotelRecommendationMutation } from '../../../api/apiSlice'
import MapComponent from '../../common/RouteMap'

const RouteDetailsResultContainer = ({ routeDetails }) => {
  const routes = routeDetails.routes
  const hotels = routeDetails.hotels
  console.log('routes', routes)
  console.log('hotels', hotels)

  const dispatch = useDispatch()
  const { selectedHotel } = useSelector((state) => state.routeResults)
  const [getHotelRecommendation, { isLoading, data, error }] =
    useGetHotelRecommendationMutation()
  const onGetRecommendationClick = async () => {
    try {
      const hotelsWithCurrentLang = hotels.map((hotel) => ({
        ...hotel,
        lang: 'ua',
      }))
      const response = await getHotelRecommendation(
        hotelsWithCurrentLang,
      ).unwrap()
      console.log('Recommendation:', response)
      dispatch(setSelectedHotel(response)) // Put recommendation into state
      console.log('selectedHotel', selectedHotel)
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
        {isLoading ? 'Loading...' : 'Recommend a hotel'}
      </button>

      {/* Displaying results if data is available */}
      {selectedHotel && (
        <div className="alert alert-success mt-3">
          {/* Show the AI recommendation summary */}
          <hr style={{ color: 'red' }} />
          <h3>AI Recommendation:</h3>
          <p>{selectedHotel.summary}</p>

          {/* Show the list of hotels */}
          <h4>Recommended Hotels:</h4>
          <ul>
            {selectedHotel.hotels.map((hotel) => (
              <li key={hotel.place_id} style={{ marginBottom: '1em' }}>
                {hotel.name}
                <br />
                <b>Recommended Rank:</b> {hotel.recval}
                <br />
                <b>Advantages:</b> {hotel.adv}
                <br />
                <b>Disadvantages:</b> {hotel.disadv}
                <br />
                <button
                  type="button"
                  onClick={() =>
                    console.log(`Book hotel with place ID: ${hotel.place_id}`)
                  }
                >
                  Book it
                </button>
              </li>
            ))}
          </ul>
          <hr style={{ color: 'red' }} />
        </div>
      )}
      {error && <p>Error: {error.message}</p>}

      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            {/*<img alt="" src={hotel.icon} />*/}
            {hotel.website !== '' ? (
              <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                {hotel.name}
              </a>
            ) : (
              hotel.name
            )}
            {hotel.name} <address>{hotel.address}</address>
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

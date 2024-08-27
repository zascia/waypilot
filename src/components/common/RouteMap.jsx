import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, DirectionsRenderer } from '@react-google-maps/api'
import Card from 'react-bootstrap/Card'

// it gets string "6 hours 29 mins" and converts it into numeric total minutes
const parseTimeString = (timeStr) => {
  let hours = 0,
    minutes = 0

  // Use regex to extract the hours and minutes
  const hoursMatch = timeStr.match(/(\d+)\s*hours?/)
  const minutesMatch = timeStr.match(/(\d+)\s*mins?/)

  if (hoursMatch) {
    hours = parseInt(hoursMatch[1], 10) // Extract and convert hours
  }
  if (minutesMatch) {
    minutes = parseInt(minutesMatch[1], 10) // Extract and convert minutes
  }

  // Calculate total minutes
  const totalMinutes = hours * 60 + minutes
  return totalMinutes
}

const getRealEstimatedTime = (initialEstimatedTime) => {
  return initialEstimatedTime + initialEstimatedTime * 0.1
}

const convertMinutesToHoursAndMinutes = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.ceil(totalMinutes % 60)
  return `${hours} hours ${minutes} minutes`
}

const MapComponent = ({ routeData }) => {
  console.log('routeData', routeData)
  const [directions, setDirections] = useState(null)
  const averageSpeed = 65 // average speed on root
  const maxDailyDistance = 700 // max daily distance recommended for drivers

  const [estimatedTotalTime, setEstimatedTotalTime] = useState(0)
  const [estimatedTotalDays, setEstimatedTotalDays] = useState(0)

  React.useEffect(() => {
    if (routeData) {
      const directionsService = new window.google.maps.DirectionsService()

      const origin = {
        lat: routeData.start_location.lat,
        lng: routeData.start_location.lng,
      }

      const destination = {
        lat: routeData.end_location.lat,
        lng: routeData.end_location.lng,
      }

      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result)
          } else {
            console.error(`error fetching directions ${result}`)
          }
        },
      )

      // handling estimations of time and distance
      const initialEstimatedTime = parseTimeString(routeData.duration)
      const realEstimatedTime = getRealEstimatedTime(initialEstimatedTime) // total minutes
      const finalConvertedTimeString =
        convertMinutesToHoursAndMinutes(realEstimatedTime)
      setEstimatedTotalTime(finalConvertedTimeString)
      setEstimatedTotalDays(Math.ceil(realEstimatedTime / 600))
    }
  }, [routeData])

  return (
    <div>
      <h3>Route is loaded successfully!</h3>
      <GoogleMap
        mapContainerStyle={{ height: '400px', width: '800px' }}
        center={{
          lat: routeData.start_location.lat,
          lng: routeData.start_location.lng,
        }}
        zoom={8}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
      <Card style={{ width: '28rem', marginTop: '20px' }}>
        <Card.Body>
          <Card.Title>Route Calculation</Card.Title>
          <Card.Text>
            <strong>From: </strong> {routeData.start_address}
            <br />
            <strong>To: </strong> {routeData.end_address}
            <br />
            <strong>Estimated Trip Distance: </strong>
            {routeData.distance}
            <br />
            <strong>Estimated Trip Time: </strong>
            {estimatedTotalTime}
            <br />
            <strong>Estimated Trip Length: </strong>
            {estimatedTotalDays} days
            <br />
            {estimatedTotalDays > 1 && (
              <>
                <br />
                <strong style={{ color: 'red' }}>
                  Estimated Trip Exceeds a day route! Would you like to plan it
                  in details?
                </strong>
                <br />
                <button type="button" className="btn btn-primary">
                  Get detailed route
                </button>
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

MapComponent.propTypes = {
  routeData: PropTypes.object,
}

export default MapComponent

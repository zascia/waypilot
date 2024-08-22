import React from 'react'
import PropTypes from 'prop-types'
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from '@react-google-maps/api'

const MapComponent = ({ routeData }) => {
  console.log('routeData', routeData)
  const [directions, setDirections] = React.useState(null)

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
    }
  }, [routeData])

  return (
    <div>
      <h3>Route is loaded successfully!</h3>
      <LoadScript googleMapsApiKey="AIzaSyAokM4l5AEIbBNbq4N7EU7VEOIPO21M3rE">
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
      </LoadScript>
    </div>
  )
}

MapComponent.propTypes = {
  routeData: PropTypes.object,
}

export default MapComponent

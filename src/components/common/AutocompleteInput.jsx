import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AutocompleteInput = ({ value, onChange, placeholder }) => {
  const [autocomplete, setAutocomplete] = useState(null)

  const handlePlaceChanged = () => {
    const place = autocomplete.getPlace()
    if (place && place.formatted_address) {
      onChange(place.formatted_address)
    }
  }

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      ref={(input) => {
        if (input && !autocomplete) {
          const newAutocomplete = new window.google.maps.places.Autocomplete(
            input,
          )
          newAutocomplete.setFields(['formatted_address'])
          newAutocomplete.addListener('place_changed', handlePlaceChanged)
          setAutocomplete(newAutocomplete)
        }
      }}
    />
  )
}

AutocompleteInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
}

export default AutocompleteInput

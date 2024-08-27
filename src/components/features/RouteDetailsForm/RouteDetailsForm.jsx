import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-google-autocomplete'
// https://www.npmjs.com/package/react-google-autocomplete
import Switcher from '../../common/Switcher'
import Form from 'react-bootstrap/Form'
import Button from '../../common/Button'
import './RouteForm.css'
import { useTranslation } from 'react-i18next'

const RouteDetailsForm = ({
  onChangeFrom,
  onChangeTo,
  onChangeSwitcher,
  onSubmit,
  switchers,
}) => {
  const { t } = useTranslation()

  return (
    <form onSubmit={onSubmit}>
      <Form.Label style={{ color: 'black' }}>From</Form.Label>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        onPlaceSelected={onChangeFrom}
        inputAutocompleteValue="From"
        language="en"
        name="from"
        className="form-control"
      />
      <Form.Label style={{ color: 'black' }}>To</Form.Label>
      <Autocomplete
        apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}
        onPlaceSelected={onChangeTo}
        inputAutocompleteValue="To"
        language="en"
        name="to"
        className="form-control"
      />
      <Switcher
        name="nightStops"
        label="Night Stops"
        checked={switchers.nightStops}
        onChange={onChangeSwitcher}
      />
      <Switcher
        name="fuelStops"
        label="Fuel Stops"
        checked={switchers.fuelStops}
        onChange={onChangeSwitcher}
      />
      <Switcher
        name="foodStops"
        label="Food Stops"
        checked={switchers.foodStops}
        onChange={onChangeSwitcher}
      />
      <div className="d-flex justify-content-between">
        <a href="/intro" className="btn btn-secondary">
          Back
        </a>
        <a href="/step3" className="btn btn-primary">
          Next
        </a>
      </div>
      <Button type="button" label="Test API" onClick={onSubmit} />
    </form>
  )
}

RouteDetailsForm.propTypes = {
  switchers: PropTypes.object.isRequired,
  onChangeTo: PropTypes.func,
  onChangeFrom: PropTypes.func,
  onChangeSwitcher: PropTypes.func,
  onSubmit: PropTypes.func,
}
export default RouteDetailsForm

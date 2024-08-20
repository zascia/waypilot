import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../common/Input'
import Switcher from '../../common/Switcher'
import Button from '../../common/Button'
import './RouteForm.css'
import { useTranslation } from 'react-i18next'

const RouteDetailsForm = ({ formData, onChange, onSubmit }) => {
  const { t } = useTranslation()
  const doNothing = () => {
    // This function intentionally does nothing
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        type="text"
        name="from"
        label="From"
        value={formData.from}
        onChange={onChange}
      />
      <Input
        type="text"
        name="to"
        label="To"
        value={formData.to}
        onChange={onChange}
      />

      <Switcher
        name="nightStops"
        label="Night Stops"
        checked={formData.nightStops}
        onChange={onChange}
      />
      <Switcher
        name="fuelStops"
        label="Fuel Stops"
        checked={formData.fuelStops}
        onChange={onChange}
      />
      <Switcher
        name="foodStops"
        label="Food Stops"
        checked={formData.foodStops}
        onChange={onChange}
      />
      <div className="d-flex justify-content-between">
        <a href="/intro" className="btn btn-secondary">
          Back
        </a>
        <a href="/step3" className="btn btn-primary">
          Next
        </a>
      </div>
      <Button type="submit" label="Test API" onClick={doNothing} />
    </form>
  )
}

RouteDetailsForm.propTypes = {
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default RouteDetailsForm

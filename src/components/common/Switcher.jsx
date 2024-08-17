import React from 'react'
import PropTypes from 'prop-types'

const Switcher = ({ label, name, checked, onChange }) => {
  return (
    <div className="form-check form-switch mb-3">
      <input
        type="checkbox"
        className="form-check-input"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label" htmlFor={name}>
        {label}
      </label>
    </div>
  )
}

Switcher.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Switcher

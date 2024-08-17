import React from 'react'
import PropTypes from 'prop-types'

const Select = ({ label, name, options, value, onChange }) => {
  console.log('options', options)
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <select
        className="form-select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
}

export default Select

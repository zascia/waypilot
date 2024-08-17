import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type = 'submit', label, onClick }) => {
  return (
    <button type={type} className="btn btn-primary" onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button

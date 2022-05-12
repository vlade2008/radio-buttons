import React from 'react'
import './styles.css'

const Button = (props) => {
  const { value } = props;
  return (
    <button>
      {value}
    </button>
  )
}

export default Button;

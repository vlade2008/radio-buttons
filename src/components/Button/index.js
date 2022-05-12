import React from 'react'
import './styles.css'

const Button = (props) => {
  const { value, onClick, id, disabled } = props;
  return (
    <button onClick={()=>onClick(id)} disabled={disabled}>
      {value}
    </button>
  )
}

export default Button;

import React from "react";
import './index.css'
import icon from './spinner.svg'

export default function Spinner() {
  return (
    <img
      src={icon}
      className='spinner'
      alt='spinner'
    />
  )
}

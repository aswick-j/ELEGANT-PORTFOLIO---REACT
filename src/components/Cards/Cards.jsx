import React from 'react'

import "./Cards.css"

const Cards = ({emoji,Heading,Description}) => {
  return (
    <div className="card">
        <img src={emoji} alt=""/>
        <span>{Heading}</span>
        <span>{Description}</span>
        <button className='c-button'>Learn More</button>
    </div>
  )
}

export default Cards
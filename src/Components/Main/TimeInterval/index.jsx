


import React from 'react'
import "./style.css"
import candlelogo from "../../../assets/images/candlelogo.png"



const TimeInterval = () => {
  return (
    <>
        <div className='timeinterval'>
            <span className='timeinterval__column'>Time</span>
            <span className='timeinterval__column'>1H</span>
            <span className='timeinterval__column'>2H</span>
            <span className='timeinterval__column'>4H</span>
            <span className='timeinterval__column'>1D</span>
            <span className='timeinterval__column'>1W</span>
            <span className='timeinterval__column'>1M</span>
            <span className='timeinterval__column'><img src={candlelogo}/></span>
        </div>
    </>
  )
}

export default TimeInterval
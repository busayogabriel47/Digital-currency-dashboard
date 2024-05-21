import React from 'react'
import "./style.css"
import Candlestick from './Candlestick/Candlestick'
import Buysell from './Buysell/Buysell'
import Openorder from './Openorder/Openorder'


const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='main__container'>
            <Candlestick/>
            <Openorder/>
        </div>


        {/* Buy and sell*/}
          <Buysell/>
            
      </div>
    </>
  )
}

export default Main
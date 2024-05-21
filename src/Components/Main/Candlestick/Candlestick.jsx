import React from 'react'
import candlestick from '../../../assets/images/candlestick.png'
import Orderbook from '../Orderbook/Orderbook'

const Candlestick = () => {
  return (
    <>
        <div className='main__candlestick'>
                <div className='main__candlestick--first'>
                    <img src={candlestick} alt='' width="100%"/>
                </div>
                <Orderbook/>
            </div>
    </>
  )
}

export default Candlestick
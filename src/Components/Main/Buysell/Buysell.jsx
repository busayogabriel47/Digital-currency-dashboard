import React from 'react'
import LMStopTab from './LimitMarketStop/tab'

const Buysell = () => {
  return (
    <>
    <div className='main__buysell'>

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item buysell__tab" role="presentation">
              <button class="nav-link buysell__tab--btn fw-semibold active position-relative" id="pills-buy-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-buy" aria-selected="true">Buy</button>
            </li>
            <li class="nav-item buysell__tab" role="presentation">
              <button class="nav-link buysell__tab--btn fw-semibold position-relative" id="pills-sell-tab" data-bs-toggle="pill" data-bs-target="#pills-sell" type="button" role="tab" aria-controls="pills-sell" aria-selected="false">Sell</button>
            </li>
          </ul>
          <div class="tab-content rounded-3 text-white" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-buy" role="tabpanel" aria-labelledby="pills-buy-tab">
                <LMStopTab/>
            </div>
            <div class="tab-pane fade" id="pills-sell" role="tabpanel" aria-labelledby="pills-sell-tab">
               <LMStopTab/>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Buysell
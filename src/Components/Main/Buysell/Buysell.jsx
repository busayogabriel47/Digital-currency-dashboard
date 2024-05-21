import React from 'react'
import LMStopTab from './LimitMarketStop/tab'

const Buysell = () => {
  return (
    <>
    <div className='main__buysell'>

        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item buysell__tab" role="presentation">
              <button class="nav-link buysell__tab--btn fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Buy</button>
            </li>
            <li class="nav-item buysell__tab" role="presentation">
              <button class="nav-link buysell__tab--btn fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Sell</button>
            </li>
          </ul>
          <div class="tab-content rounded-3 p-3 text-white" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <LMStopTab/>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              
            </div>
            
          </div>
        </div>
    </>
  )
}

export default Buysell
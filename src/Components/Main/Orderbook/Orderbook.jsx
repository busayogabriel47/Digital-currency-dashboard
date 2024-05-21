import React from 'react'
import Profitable from './Tabledata/ProfitTable'
import DepreciateTable from './Tabledata/depreciateTable'
import RecentProfitable from './Tabledata/RecentTrade/ProfitTable'
import RecentTradeDepTable from './Tabledata/RecentTrade/depreciateTable'




const Orderbook = () => {
  return (
    <>
          <div className='main__order'>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link order__recent--btn fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Order Book</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link order__recent--btn fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Recent trade</button>
                      </li>
                    </ul>
                    <div class="tab-content rounded-3 p-3 text-white" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                          <DepreciateTable/>
                          <Profitable/>
                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                          <RecentProfitable/>
                          <RecentTradeDepTable/>
                      </div>
                      
                    </div>
                </div>
    </>
  )
}

export default Orderbook
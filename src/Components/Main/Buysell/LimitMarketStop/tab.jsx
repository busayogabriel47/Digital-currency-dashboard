

import React from 'react'
import LimitForm from './LimitForm';
import MarketForm from './MarketForm';





const LMStopTab = () => {
  return (
    <>
          <div className='main__order'>
                    <ul class="nav nav-pills mb-3 limit__ms" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link order__recent--btn lmstop__limit fw-semibold active position-relative" id="pills-limit-tab" data-bs-toggle="pill" data-bs-target="#pills-limit" type="button" role="tab" aria-controls="pills-limit" aria-selected="true">Limit</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link order__recent--btn lmstop__limit fw-semibold position-relative" id="pills-market-tab" data-bs-toggle="pill" data-bs-target="#pills-market" type="button" role="tab" aria-controls="pills-market" aria-selected="false">Market</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link order__recent--btn lmstop__limit fw-semibold position-relative" id="pills-stop-tab" data-bs-toggle="pill" data-bs-target="#pills-stop" type="button" role="tab" aria-controls="pills-stop" aria-selected="false">Stop-Limit</button>
                      </li>
                    </ul>
                    <div class="tab-content rounded-3 text-white" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-limit" role="tabpanel" aria-labelledby="pills-limit-tab">
                          <LimitForm/>
                      </div>
                      <div class="tab-pane fade" id="pills-market" role="tabpanel" aria-labelledby="pills-market-tab">
                        <MarketForm/>
                      </div>
                      <div class="tab-pane fade" id="pills-stop" role="tabpanel" aria-labelledby="pills-stop-tab">
                        <LimitForm/>
                      </div>
                      
                    </div>
                </div>
    </>
  )
}

export default LMStopTab;
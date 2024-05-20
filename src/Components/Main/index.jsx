import React from 'react'
import candlestick from '../../assets/images/candlestick.png'
import "./style.css"


const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='main__container'>
            <div className='main__candlestick'>
                <div className='main__candlestick--first'>
                    <img src={candlestick} alt='' width="100%"/>
                </div>
                <div className='main__order'>
                    <ul class="nav nav-pills mb-3 border-bottom border-2" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                      </li>
                    </ul>
                    <div class="tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h2>Home</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h2>Profile</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <h2>Contact</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                    </div>
                </div>
            </div>
            <div className='main__openorder'>
                <ul class="nav nav-pills mb-3 border-bottom border-2" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                      </li>
                    </ul>
                    <div class="tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h2>Home</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h2>Profile</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <h2>Contact</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                    </div>
            </div>
        </div>


        {/* Buy and sell*/}
          <div className='main__buysell'>

          <ul class="nav nav-pills mb-3 border-bottom border-2" id="pills-tab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold active position-relative" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link text-primary fw-semibold position-relative" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                      </li>
                    </ul>
                    <div class="tab-content border rounded-3 border-primary p-3 text-danger" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h2>Home</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h2>Profile</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <h2>Contact</h2>
                        <p>Please check our more design @ <a target="_blank" href="https://codepen.io/Gaurav-Rana-the-reactor">Codepen</a></p>
                      </div>
                    </div>
          </div>
            
      </div>
    </>
  )
}

export default Main
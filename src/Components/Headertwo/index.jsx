import React from 'react'
import cryptoicons from "../../assets/images/cryptoicons.png"
import group from "../../assets/images/group.png"
import "./style.css"


const Headertwo = () => {
  return (
    <>
        <div className='headertwo'>
               <div className='headertwo__select'>
                    <div class="dropdown">
                    <button class="headertwo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <span><img src={cryptoicons} alt=''/>
                        <img src={group} alt=''/>
                        </span>
                        <h2>BTC/USDT</h2>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item active" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"/></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    </div>

                    <div className='headertwo__price'><p>$20, 634</p></div>
                </div> 

                <div className='headertwo__btcdata'>
                    <div>
                        <span className='header__btcdata-hrs'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                        </svg> 24h change</span>
                        <p className='header__btcdata-digit'>520.80 + 1.25%</p>
                    </div>

                    <div>
                        <span className='header__btcdata-hrs'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
                        </svg> 24h high</span>
                        <p className='header__btcdata-digit'>520.80 + 1.25%</p>
                    </div>

                    <div>
                        <span className='header__btcdata-hrs'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                        </svg>
                        24h low</span>
                        <p className='header__btcdata-digit'>520.80 + 1.25%</p>
                    </div>

                    <div>
                        <span className='header__btcdata-hrs'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                        </svg>
                        24h low</span>
                        <p className='header__btcdata-digit'>520.80 + 1.25%</p>
                    </div>
                </div>
            
            <div></div>
        </div>
    </>
  )
}

export default Headertwo
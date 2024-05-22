import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Footer() {
  return (

    <>
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__copywrite'>
                    <p>&copy; 2024 <Link to="/">CenturyHub</Link></p>
                </div>

                <div className='footer__icon'>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>

                <div className='footer__contact'>
                    <Link to="/">Contactus</Link>
                </div>
            </div>
        </div>
    </>

  )
}

export default Footer
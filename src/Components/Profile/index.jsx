import avater from "../../assets/images/averter.png"
import "./style.css"


import React from 'react'

const Profile = () => {
  return (
    <div className="profile">
        <div className="profile__avater"><img src={avater} alt="" width="90%"/></div>
    </div>
  )
}

export default Profile
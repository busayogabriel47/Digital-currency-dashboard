import React from 'react'
import "./style.css"



const Profile = () => {
  return (
    <>
            <div class="profile">
        <div class="profile__container">
            <section class="profile__info">
                <div class="profile__header">
                    <img src="avatar.jpg" alt="User Avatar" class="profile__avatar"/>
                    <h2 class="profile__title">John Doe</h2>
                </div>
                <table class="profile__table">
                    <tbody class="profile__table-body">
                        <tr class="profile__table-row">
                            <td class="profile__table-cell profile__table-cell--label">Email:</td>
                            <td class="profile__table-cell">john.doe@example.com</td>
                        </tr>
                        <tr class="profile__table-row">
                            <td class="profile__table-cell profile__table-cell--label">Username:</td>
                            <td class="profile__table-cell">johndoe</td>
                        </tr>
                        <tr class="profile__table-row">
                            <td class="profile__table-cell profile__table-cell--label">Phone:</td>
                            <td class="profile__table-cell">+1 234 567 890</td>
                        </tr>
                        <tr class="profile__table-row">
                            <td class="profile__table-cell profile__table-cell--label">Location:</td>
                            <td class="profile__table-cell">New York, USA</td>
                        </tr>
                        <tr class="profile__table-row">
                            <td class="profile__table-cell profile__table-cell--label">Joined:</td>
                            <td class="profile__table-cell">January 1, 2020</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    </div>
    </>
  )
}

export default Profile
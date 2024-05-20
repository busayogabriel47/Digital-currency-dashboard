import sisyphuslogo from "../../assets/images/sisyphus-logo.png"
import "./Header.css"
import Searchbar from "../Searchbar"
import Profile from "../Profile"


const Header = () => {
  return (
    <>
        <div className="header">
            <div className="header__logo">
              <img src={sisyphuslogo} alt="sisyphuslogo"/>
            </div>
            <div className="header__navitems">
                <ul>
                    <li>Dashboard</li>
                    <li>Markets</li>
                    <li>Wallet</li>
                    <li>Profile</li>
                </ul>
            </div>
            <div>
            <div class="search-bar">
                <Searchbar/>
                <Profile/>
            </div>
            </div>
        </div>
    </>
  )
}

export default Header
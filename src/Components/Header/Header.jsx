import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import centuryhublogo from "../../assets/images/centurylogonew.png";
import Searchbar from "../Searchbar";
import Profile from "../Profile";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Simulate an authentication process
    setIsAuthenticated(false);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={centuryhublogo} alt="sisyphuslogo" width="110%"/>
      </div>
      <nav className="header__navitems">
        <ul className="header__navlist">
          <li className="header__navitem"><Link to="/">Dashboard</Link></li>
          <li className="header__navitem"><Link to="/markets">Markets</Link></li>
          <li className="header__navitem"><Link to="/wallet">Wallet</Link></li>
          <li className="header__navitem"><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      <div className="header__search-profile">
        <Searchbar />
        {isAuthenticated ? (
          <Profile />
        ) : (
          <button className="header__signin-button" onClick={handleSignIn}>Sign In</button>
        )}
      </div>
    </header>
  );
};

export default Header;
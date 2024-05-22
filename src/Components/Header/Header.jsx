import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import centuryhublogo from "../../assets/images/centurylogonew.png";
import Searchbar from "../Searchbar";
import Profile from "../Profile";
import "./Header.css";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignIn = () => {
    // Simulate an authentication process
    setIsAuthenticated(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img src={centuryhublogo} alt="centuryhub logo" />
      </div>
      <nav className={`header__navitems ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="header__navlist">
          <li className="header__navitem"><Link to="/" onClick={toggleMobileMenu}>Dashboard</Link></li>
          <li className="header__navitem"><Link to="/markets" onClick={toggleMobileMenu}>Markets</Link></li>
          <li className="header__navitem"><Link to="/wallet" onClick={toggleMobileMenu}>Wallet</Link></li>
          <li className="header__navitem"><Link to="/profile" onClick={toggleMobileMenu}>Profile</Link></li>
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
      <button className="header__hamburger" onClick={toggleMobileMenu}>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>
    </header>
  );
};

export default Header;
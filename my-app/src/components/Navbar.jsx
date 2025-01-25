import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (

    <nav className="navbar">
    <div className="navbar-center">
        <ul className="nav-links">
            <li>
            <a href="./pages/Home">For you</a>
        </li>
        <li>
            <a href="./pages/Fit">Find your fit</a>
        </li>
        <li>
            <a href="/./pages/Account">Account</a>
        </li>
        </ul>
    </div>
    
    </nav>  
  );
};

export default Navbar;
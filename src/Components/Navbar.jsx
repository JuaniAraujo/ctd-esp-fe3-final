import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-cyan">
      <div className="container">
        <Link className="navbar-brand text-white font-weight-bold fs-3" to="/">
          <span style={{ fontWeight: 'bold', color: '#007BFF' }}>Odonto</span>
          <span style={{ fontWeight: 'normal' }}>Blue</span>
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-5 mr-3" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-5 mr-3" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white fs-5 mr-3" to="/favs">
                Favorites
              </NavLink>
            </li>
          </ul> 
        </div>
      </div>
      <button className="btn btn-dark fs-6 " style={{ color: 'black', backgroundColor: '#007BFF' }}>
        Change theme
      </button>
    </nav>
  );
}

export default Navbar;

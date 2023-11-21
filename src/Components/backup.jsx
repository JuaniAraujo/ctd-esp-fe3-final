import React from 'react';
//import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
//import { AppContext } from '../Context/AppContext'; 

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  //const { state } = useContext(AppContext);

  return (
    
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <nav className={`navbar ${state.theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}>
     */}
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="container">
        <Link className="navbar-brand" to="/"> Nombre de la Compañía </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favs">
                Favorites
              </NavLink>
            </li>
          </ul> 
        </div>
      </div>
      
      <button>Change theme</button>
      <div>este es el navbar</div>
    </nav>
  )
}

export default Navbar
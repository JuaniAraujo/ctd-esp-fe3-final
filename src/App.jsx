//Éste sería el componente principal
import React from 'react';
import Routes from './Routes';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  return (
      <div className="App">
          <Routes />
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;

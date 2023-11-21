//Éste sería el componente principal
import React from 'react';

import AppRoutes from './AppRoutes';

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App() {
  console.log('Rendering App component'); // depuracion
  return (
    <div>
      <Navbar />
      <div className="App">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

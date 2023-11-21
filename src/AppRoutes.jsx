// importo los componentes de react-router-dom:
import React from 'react';

import { Routes, Route } from 'react-router-dom';

//importo las rutas básicas:
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';
//import Prueba from './Routes/Prueba';

const AppRoutes = () => {
  //console.log('Rendering AppRoutes component'); // depuracion
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/favs" element={<Favs />} />
      <Route path="/dentist/:id" element={<Detail />} /> {/*ruta para Detail corregida */}
    </Routes>
  );
};

export default AppRoutes;

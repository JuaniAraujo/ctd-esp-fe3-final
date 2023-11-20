// importo los componentes de react-router-dom:
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//importo las rutas básicas:
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail" component={Detail} />
        <Route path="/favs" component={Favs} />
      </div>
    </Router>
  );
};

export default Routes;

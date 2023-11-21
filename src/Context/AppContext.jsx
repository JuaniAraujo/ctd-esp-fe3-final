/* Este archivo define el proveedor del contexto
   y un hook personalizado useAppContext para facilitar
   el consumo del contexto en los componentes. */

import React, { createContext, useReducer, useContext } from 'react';
import { appReducer, initialState } from './AppReducer';


// Crear el contexto
const AppContext = createContext();


// Crear el proveedor del context
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Puedes agregar más valores al contexto según tus necesidades
  const contextValues = {
    state,
    dispatch,
    // Otros valores globales que necesites, por ejemplo:
    toggleTheme: () => dispatch({ type: 'TOGGLE_THEME' }),
  };

  return (
    <AppContext.Provider value={contextValues}>
      {children}
    </AppContext.Provider>
  );
};


// Crear el hook personalizado para usar el contexto
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};


export { AppContext, AppProvider, useAppContext };

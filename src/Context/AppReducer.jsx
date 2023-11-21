// Este archivo define el estado inicial y el reducer que manejará las acciones.

export const initialState = {
    theme: 'light',
    dentists: [], // Información de los dentistas
    favoriteDentists: [], // Dentistas destacados
  // Otros estados globales pueden ir aquí
  };
  
  export const appReducer = (state, action) => {
    switch (action.type) {

      case 'TOGGLE_THEME':
        return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };

      case 'SET_DENTISTS':
        // La spread syntax ({ ...state }) se utiliza para crear una copia del estado actual
      // y luego se sobrescribe la propiedad dentists con la nueva información proporcionada por action.payload.
        return { ...state, dentists: action.payload };

      case 'TOGGLE_FAVORITE':
      // Verificamos si el dentista ya está en destacados y lo agregamos o eliminamos en consecuencia
      const isFavorite = state.favoriteDentists.some(dentist => dentist.id === action.payload.id);
      return {
        ...state,
        favoriteDentists: isFavorite
          ? state.favoriteDentists.filter(dentist => dentist.id !== action.payload.id)
          : [...state.favoriteDentists, action.payload],
      };

      // Otros casos pueden ir aquí

      default:
        return state;
        
    }
  };
  
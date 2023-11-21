import React from "react";

const Form = ({ email, setEmail }) => {
  // Validación de email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith('.com'); 
    //utilizo una expresión regular
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {email && !isValidEmail(email) && (
          <p style={{ color: 'red' }}>Por favor, ingrese un email válido</p>
        )}
        {/* Otros elementos del formulario */}
      </form>
    </div>
  );
};

export default Form;
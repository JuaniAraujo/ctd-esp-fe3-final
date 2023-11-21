import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.endsWith(".com");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName.length > 5 && isValidEmail(email)) {
      // Simulamos el envío del formulario (en este caso, solo mostramos los datos por consola)
      console.log("Datos del formulario:", { fullName, email });

      // Mostramos el mensaje de éxito
      setIsFormSubmitted(true);
    } else {
      // Mostramos el mensaje de error
      console.error("Por favor, verifique su información nuevamente");
    }
  };

  return (
    <div>
      {isFormSubmitted ? (
        <p>
          Thank you, {fullName}. We will contact you as soon as possible via email.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {fullName.length > 5 && !isValidEmail(email) && (
            <p style={{ color: "red" }}>Please enter a valid email</p>
          )}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Form;

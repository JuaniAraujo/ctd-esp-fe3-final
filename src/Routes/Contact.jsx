import Form from '../Components/Form'
import React, { useState } from 'react';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const [email, setEmail] = useState('');

  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form email={email} setEmail={setEmail} />
    </div>
  )
}

export default Contact

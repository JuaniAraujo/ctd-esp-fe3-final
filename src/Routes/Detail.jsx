import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import { useAppContext } from '../Context/AppContext';

/* Este componente debera ser estilado como "dark"
 o "light" dependiendo del theme del Context */

 const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
 
  /*  Consumiendo el parametro dinamico de la URL deberan
   hacer un fetch a un user en especifico */

   useEffect(() => {
    /* Aquí debes realizar la llamada a la API para obtener la información
    del dentista específico. Puedes usar fetch o axios, y luego actualizar
    el estado con dispatch({ type: 'SET_DENTISTS', payload: data }); */
    const fetchDentistDetails = async () => {
      try {

        // Realiza la solicitud a la API para obtener detalles del dentista específico
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();

        // Actualiza el estado con la información del dentista
        console.log('Dentist ID:', id);
        console.log('Dentist Data:', data);
        setDentist(data);

      } catch (error) {
        console.error('Error fetching dentist details:', error);

      }
    };

    // Llama a la función de solicitud cuando el componente se monta
    fetchDentistDetails();
  }, [id]); // Te asegurás de que se vuelva a llamar si cambia el ID en la URL


  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user
      en especifico. Deberan mostrar el name - email - phone - website
      por cada user en especifico: */}
      {dentist && (
        <div>
          <p>Name: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Phone: {dentist.phone}</p>
          <p>Website: {dentist.website}</p>
        </div>
      )}
    </>
  )
}

export default Detail
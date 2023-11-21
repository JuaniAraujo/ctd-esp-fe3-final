import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error('Error fetching dentists:', error);
      }
    };

    fetchDentists();
  }, []); 

  return (
    <main className="container my-4">
      <h1 className="mb-4">Our Dentists:</h1>
      <div className='row row-cols-1 row-cols-md-5 g-4'>
        {dentists.map((dentist) => (
          <div key={dentist.id} className='col'>
            <Card name={dentist.name} username={dentist.username} id={dentist.id} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home;

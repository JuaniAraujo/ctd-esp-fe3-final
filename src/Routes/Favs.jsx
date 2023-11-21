import React from "react";
import Card from "../Components/Card";
import { useAppContext } from "../Context/AppContext";

const Favs = () => {
  const { state } = useAppContext();

  return (
    <main className="container my-4">
      <h1 className="mb-4">Favorite Dentists:</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {state.favoriteDentists.map((dentist) => (
          <div key={dentist.id} className="col">
            <Card name={dentist.name} username={dentist.username} id={dentist.id} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Favs;

import React from "react";
import { Link } from 'react-router-dom';
import { useAppContext } from "../Context/AppContext";

const Card = ({ name, username, id }) => {
  
  const { state, dispatch } = useAppContext();

  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: { id, name, username } });
  };

  return (
    <div className="card h-100">
      <img
        src="../images/doctor.jpg"
        className="card-img-top"
        alt={`Image of ${name}`}
      />
      <div className="card-body d-flex flex-column">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{username}</p>
        <div className="mt-auto">
          <Link to={`/dentist/${id}`} className="btn btn-primary mx-auto">
            Show Details
          </Link>
          <button onClick={toggleFavorite} className="btn btn-outline-secondary">
        {state.favoriteDentists.some(dentist => dentist.id === id)
          ? 'Remove from Favorites'
          : 'Add to Favorites'}
      </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

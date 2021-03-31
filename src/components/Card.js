import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, sprites }) => {
  return (
    <div className="card mt-5 ml-4">
      <header className="card-header">
        <p className="card-header-title is-centered">{name}</p>
        <span className="card-header-icon">Id: {id}</span>
      </header>
      <div className="card-content">
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={sprites} alt="name" />
          </figure>
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/img/${id}`} className="card-footer-item">
          <p>more...</p>
        </Link>
      </footer>
    </div>
  );
};

export default Card;

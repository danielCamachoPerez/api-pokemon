import React from "react";
import HeaderPoke from "../img/pokemon.png";
//import Charizard from '../img/charizard.png'
import "../css/app.css";

const Header = ({ subtitle }) => {
  return (
    <>
      <section className="hero is-link">
        <div className="hero-body has-text-centered">
          <p className="title">Poke-Api</p>
          <div className="is-flex is-justify-content-center">
            <img
              className="image-border-drop"
              src={HeaderPoke}
              alt="header-pokemon"
            />
          </div>
          <p className="subtitle has-text-centered">{subtitle}</p>
        </div>
      </section>
    </>
  );
};

export default Header;

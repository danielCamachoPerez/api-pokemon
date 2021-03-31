import React from "react";
import { useHistory, useParams } from "react-router-dom";
//import { PokemonContext } from "../hooks/useContext/PokemonContext";
//import ImagePokemon from "./ImageView";
import useModalPokemon from "../hooks/useState/useModalPokemon";

const Modal = () => {
  const history = useHistory();
  //const { pokemon } = useContext(PokemonContext);
  const { id } = useParams();
  const modal = useModalPokemon(id);
  const img = modal[parseInt(id, 10)];
  //console.log(img.name);
  //console.log(img.sprites.front_default)
  if (!img) return null;
  const back = (e) => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div onClick={back} className="modal">
      <div className="modal-background"></div>
      <div className="modal-content">
        <p className="image is-4by3">
          <img src="https://bulma.io/images/placeholders/1280x960.png" alt=""/>
        </p>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
      <button type="button" onClick={back}>
        Close
      </button>
    </div>
  );
};

export default Modal;

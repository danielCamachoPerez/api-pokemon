import React, { useContext, useState } from "react";
import { PokemonContext } from "../hooks/useContext/PokemonContext";
import Card from "./Card";
import Spinner from "./Spinner";

const Pokemon = () => {
  const { pokemon } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  //console.log(pokemon)
  setTimeout(() => setLoading(false), 3000);
  return (
    <div>
      <div className="container is-fullhd is-centered mt-5">
        <div className="notification is-primary is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-start">
          {loading ? (
            <Spinner />
          ) : (
            pokemon.map((p) => (
              <Card
                key={p.id}
                id={p.id}
                name={p.name}
                sprites={p.sprites.front_default}
                //sprites={p.img}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;

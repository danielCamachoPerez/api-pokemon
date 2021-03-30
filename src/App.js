import React from "react";
import Pokemon from "./components/Pokemon";
import PokemonProvider from "./hooks/useContext/PokemonContext";

const App = () => {
  return (
    <PokemonProvider>
      <h1>Poke-Api</h1>
      <Pokemon />
    </PokemonProvider>
  );
};

export default App;

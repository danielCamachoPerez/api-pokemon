import React from "react";
//import Pokemon from "./components/Pokemon";
import Menu from "./components/Menu";
import Header from "./components/Header";
import PokemonProvider from "./hooks/useContext/PokemonContext";

const App = () => {
  return (
    <>
      <Header subtitle="View All Pokemon!" />
      <PokemonProvider>
        <Menu />
      </PokemonProvider>
    </>
  );
};

export default App;

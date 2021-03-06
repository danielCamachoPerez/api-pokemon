import { createContext, useEffect, useState } from "react";
import getPokemon from "../../services/getPokemon";

export const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
       //console.log(getPokemon())
       getPokemon().then(x=>x.map(x=>setPokemon(data=>[...data, x])))
       //setPokemon(getPokemon())
    }, []);
    const value = {
        pokemon,
    }
    return (
        <PokemonContext.Provider
            value={value}
        >
            {children}
        </PokemonContext.Provider>
    )
};

export default PokemonProvider
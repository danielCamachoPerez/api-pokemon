import { createContext, useEffect, useState } from "react";
import getPokemon from "../../services/getPokemon";

export const PokemonContext = createContext();

const PokemonProvider = ({children}) => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        //console.log(getPokemon())
        //Promise.resolve(getPokemon()).then(resolve=>resolve.map(re=>console.log(re)))
        
       //Promise.resolve(getPokemon()).then(resolve=>resolve.map(re=>{
       //    fetch(re).then(x=>x.json()).then(x=>setPokemon(data=>[...data, x]))
       //}))

       //Promise.resolve(getPokemon()).then(response=>response.map(x=>console.log(x)))

       //getPokemon().then(x=>x.map(x=>console.log(x)))
       getPokemon()
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
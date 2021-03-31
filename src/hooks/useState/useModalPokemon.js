import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useModalPokemon = () => {
    const { id } = useParams();
    const [modalPokemon, setModalPokemon] = useState([]);
    useEffect(() => {
        const getData = async() => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
            const results = await fetch(url);
            const response = await results.json();
            setModalPokemon(data=>[...data, response]);
            //console.log(response);
        };
        getData();
    }, [id]);
    return modalPokemon;
};

export default useModalPokemon;
import React from "react";
import { useParams } from "react-router-dom";
import useModalPokemon from "../hooks/useState/useModalPokemon";

const ImageView = () => {
    const { id } = useParams();
    const data = useModalPokemon(id)
    return (
        <div>
            {data.map(x=>(
                <div key={x.id}><img src={x.sprites.front_default} alt={x.name}/></div>
            ))}
        </div>
    )
};
export default ImageView;
const getPokemon = async() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
    const result = await fetch(url);
    const response = await result.json();
    const listOfPromises = response.results.map((pokemon) =>
        getData(pokemon.url)
    );
    //convertimos una lista de promesas en una promesa de una lista
    return Promise.all(listOfPromises);
};
const getData = async(pokemon) => {
    //const url = pokemon;
    const result = await fetch(pokemon);
    const response = await result.json();
    return response;
};

const pokemonListPromise = getPokemon();
//console.log(pokemonListPromise.toString()); //es una promesa
pokemonListPromise.then((list) => {
    //console.log(list.length); // es una lista de promesas
    //console.log(list[0].abilities[0].ability);
    return list;
});
/* const getPokemon = () => {
    const pokemons = [{
            id: 0,
            name: "Bulbasaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        },
        {
            id: 1,
            name: "Ivysaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
        },
        {
            id: 2,
            name: "Venusaur",
            img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
        },
    ];
    return pokemons;
}; */

export default getPokemon;
//export default getPokemon;
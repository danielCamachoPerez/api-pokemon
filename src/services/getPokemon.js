const getPokemon = async() => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
    const result = await fetch(url);
    const response = await result.json();
    return response.results.map((pokemon) => getData(pokemon.url));
    //return response.results.forEach((pokemon) => getData(pokemon.url));
};
const getData = async(pokemon) => {
    //const url = pokemon;
    const result = await fetch(pokemon);
    const response = await result.json();
    //return response;
    console.log(response);
};

/* const getPokemon = () => {
    const pokemons = [
        { id: 1, name: "Bulbasaur" },
        { id: 2, name: "Charmander" },
        { id: 3, name: "Squirtle" },
    ];
    return pokemons;
}; */

export default getPokemon;
//export default getPokemon;
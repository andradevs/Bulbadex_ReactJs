module.exports = {
    getPokemons : async function() {
        const pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
            .then(res => res.json())
        console.log(pokemons)
        return pokemons
    }
} 


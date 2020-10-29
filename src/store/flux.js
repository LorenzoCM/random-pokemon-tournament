import { toast } from "react-toastify";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            pokeApi: "https://pokeapi.co/api/v2/pokemon/",
            pokemon: [],
            semifinal: [],
            final: [],
            winner: []
        },
        actions: {
            getPokemon: async () => {      //Function to get all the first 151 Pokemon.
                const store = getStore();
                for (let i = 0; i < 8; i++) {
                    const random = Math.floor(Math.random() * 151);
                    const resp = await fetch(`${store.pokeApi}${random}`, {
                        method: 'GET',
                    })
                    const data = await resp.json();
                    setStore({
                        ...store,
                        pokemon: store.pokemon.concat(data)
                    })
                }
            },
            pokemonBattle1: (pokemon1, pokemon2, index, array) => {
                const store = getStore();               

                // Conditionals for special attack pokemon:

                if (pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "water" || pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "rock" || pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "dragon") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "ice" || pokemon1.types[0].type.name === "fire" && pokemon2.types[0].type.name === "bug") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "water" || pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "dragon") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "ground" || pokemon1.types[0].type.name === "water" && pokemon2.types[0].type.name === "rock") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "flying" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "bug" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "poison" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "dragon") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "water" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "ground" || pokemon1.types[0].type.name === "grass" && pokemon2.types[0].type.name === "ground") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "electric" || pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "dragon") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "water" || pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "flying") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                } else if (pokemon1.types[0].type.name === "electric" && pokemon2.types[0].type.name === "ground") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0;
                }

                if (pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "water" || pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "ice") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "flying" || pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "ground" || pokemon1.types[0].type.name === "ice" && pokemon2.types[0].type.name === "dragon") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "psychic" && pokemon2.types[0].type.name === "psychic") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "psychic" && pokemon2.types[0].type.name === "fighting" || pokemon1.types[0].type.name === "psychic" && pokemon2.types[0].type.name === "poison") {
                    pokemon1.stats[3].base_stat = pokemon1.stats[3].base_stat * 2;
                }

                // Conditionals for physical attack pokemon:

                if (pokemon1.types[0].type.name === "normal" && pokemon2.types[0].type.name === "rock") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "normal" && pokemon2.types[0].type.name === "ghost") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0;
                }

                if (pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "psychic" || pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "flying" || pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "bug" || pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "poison") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "ice" || pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "normal" || pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "rock") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                } else if (pokemon1.types[0].type.name === "fighting" && pokemon2.types[0].type.name === "ghost") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0;
                }

                if (pokemon1.types[0].type.name === "flying" && pokemon2.types[0].type.name === "electric" || pokemon1.types[0].type.name === "flying" && pokemon2.types[0].type.name === "rock") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "flying" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "flying" && pokemon2.types[0].type.name === "fighting" || pokemon1.types[0].type.name === "flying" && pokemon2.types[0].type.name === "bug") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "bug") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "electric" || pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "rock" || pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "poison") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                } else if (pokemon1.types[0].type.name === "ground" && pokemon2.types[0].type.name === "flying") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0;
                }

                if (pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "fighting" || pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "ground") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "ice" || pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "ice" || pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "flying" || pokemon1.types[0].type.name === "rock" && pokemon2.types[0].type.name === "bug") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "fire" || pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "fighting" || pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "flying") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "psychic" || pokemon1.types[0].type.name === "bug" && pokemon2.types[0].type.name === "poison") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "ground" || pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "rock" || pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "poison" || pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "ghost") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0.5;
                } else if (pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "grass" || pokemon1.types[0].type.name === "poison" && pokemon2.types[0].type.name === "bug") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 2;
                }

                if (pokemon1.types[0].type.name === "ghost" && pokemon2.types[0].type.name === "psychic" || pokemon1.types[0].type.name === "ghost" && pokemon2.types[0].type.name === "normal") {
                    pokemon1.stats[1].base_stat = pokemon1.stats[1].base_stat * 0;
                }

                let attacks1 = (pokemon1.stats[1].base_stat + pokemon1.stats[3].base_stat) / 2;
                let attacks2 = (pokemon2.stats[1].base_stat + pokemon2.stats[3].base_stat) / 2;

                let defense1 = (pokemon1.stats[2].base_stat + pokemon1.stats[4].base_stat) / 2;
                let defense2 = (pokemon2.stats[2].base_stat + pokemon2.stats[4].base_stat) / 2;

                let attack1 = attacks1 - defense2;
                let attack2 = attacks2 - defense1;

                console.log(pokemon1.name, pokemon2.name)

                if (array.length == 4) {
                    if (index < 2) {
                        if (attack1 > attack2) {
                            setStore({
                                ...store,
                                semifinal: store.semifinal.concat(pokemon1),
                            })
                            const notify = () => toast.success("El ganador es: " + pokemon1.name);
                            notify();
                            return console.log("pokemon 1 wins");
                        } else {
                            setStore({
                                ...store,
                                semifinal: store.semifinal.concat(pokemon2),
                            })
                            const notify = () => toast.success("El ganador es: " + pokemon2.name);
                            notify();
                            return console.log("pokemon 2 wins")
                        }
                    } else {
                        if (attack1 > attack2) {
                            setStore({
                                ...store,
                                semifinal: store.semifinal.concat(pokemon1),
                            })
                            const notify = () => toast.success("El ganador es: " + pokemon1.name);
                            notify();
                            return console.log("pokemon 1 wins");
                        } else {
                            setStore({
                                ...store,
                                semifinal: store.semifinal.concat(pokemon2),
                            })
                            const notify = () => toast.success("El ganador es: " + pokemon2.name);
                            notify();
                            return console.log("pokemon 2 wins")
                        }
                    }
                } else if (array.length == 2) {
                    if (attack1 > attack2) {
                        setStore({
                            ...store,
                            final: store.final.concat(pokemon1),
                        })
                        const notify = () => toast.success("El ganador es: " + pokemon1.name);
                        notify();
                        return console.log("pokemon 1 wins");
                    } else {
                        setStore({
                            ...store,
                            final: store.final.concat(pokemon2),
                        })
                        const notify = () => toast.success("El ganador es: " + pokemon2.name);
                        notify();
                        return console.log("pokemon 2 wins")
                    }
                } else {
                    if (attack1 > attack2) {
                        setStore({
                            ...store,
                            winner: store.winner.concat(pokemon1),
                        })
                        const notify = () => toast.success("El ganador del torneo es: " + pokemon1.name);
                        notify();
                        return console.log("pokemon 1 Champion");
                    } else {
                        setStore({
                            ...store,
                            winner: store.winner.concat(pokemon2),
                        })
                        const notify = () => toast.success("El ganador del torneo es: " + pokemon2.name);
                        notify();
                        return console.log("pokemon 2 Champion")
                    }
                }
                console.log(store.semifinal);
            },
            handleChange: e => {   //Function to catch the user's input tag and store it in a variable in the store.
                setStore({
                    [e.target.name]: e.target.value
                })
            }
        }
    }
}


export default getState;



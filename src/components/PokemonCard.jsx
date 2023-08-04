import { useEffect, useState } from "react";
import React from "react";
import PokemonInfos from "./PokemonInfos";

function PokemonCard() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function getPokemonObject(res) {
      res.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((current) => [...current, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    getPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <div className="header">
        <img
          className="logo"
          src="https://1000logos.net/wp-content/uploads/2017/05/Pokemon-Logo.png"
          alt=""
        />
      </div>
      <div className="wrapper">
        {allPokemons.map((pokemon, i) => (
          <PokemonInfos
            id={pokemon.id}
            image={pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            ability={pokemon.abilities[0].ability.name}
            key={i}
          />
        ))}
      </div>
      <div className="btn-wrapper">
        <button className="btn" onClick={() => getAllPokemons()}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default PokemonCard;

import React, { useEffect, useState } from 'react';
import { getPokemonDetails } from './api/pokemon';
import useFetch from './hooks/useFetch';
import PokemonCardDetails from './components/PokemonCardDetails';
import Counter from './components/Counter';

function App() {
  const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=15');
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchAllDetails = async () => {
      if (!data?.results) return;
      const details = await Promise.all(
        data.results.map(pokemon => getPokemonDetails(pokemon.url))
      );
      setPokemonDetails(details);
    };

    fetchAllDetails();
  }, [data]);

  return (
    <div className="app">
      <h1 className="heading">Pokémon List</h1>

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="grid">
        {pokemonDetails.map(pokemon => (
          <PokemonCardDetails key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      {/* use reducer example */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
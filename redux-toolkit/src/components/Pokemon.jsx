import React from "react";
import { useGetPokemonNameQuery } from "../services/pokemon";

const Pokemon = () => {
  const { data, error, isLoading } = useGetPokemonNameQuery("pikachu");

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      {data && (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      )}
    </div>
  );
};

export default Pokemon;

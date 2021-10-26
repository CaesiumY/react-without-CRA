import React, { useState } from "react";
import { useGetPokemonNameQuery } from "../services/pokemon";

const Pokemon = () => {
  const [skip, setSkip] = useState(true);
  const [name, setName] = useState("");
  const { data, error, isLoading } = useGetPokemonNameQuery(name, { skip });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    setSkip(false);
  };

  return (
    <div>
      RTK Query using pokemon api
      {error ? (
        <p>Error!</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <h3>{data.species?.name}</h3>
          <img src={data.sprites?.front_shiny} alt={data.species?.name} />
        </>
      ) : null}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Pokemon;

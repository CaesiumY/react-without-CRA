import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemon",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonName: builder.query({
      query: (name = "") => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonNameQuery } = pokemonApi;

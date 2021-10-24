import { createSlice } from "@reduxjs/toolkit";
import movies from "../../movies.json";

const initialState = {
  all: [...movies],
  current: {},
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    fetchMovies: (state, action) => {
      state.all = action.payload;
    },
    fetchMovie: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { fetchMovies, fetchMovie } = movieSlice.actions;
export default movieSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../reducer/counterSlice";
import movieReducer from "../reducer/movieSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer,
  },
});

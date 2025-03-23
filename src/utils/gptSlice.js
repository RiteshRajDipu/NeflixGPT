import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        toggleGptSearch: false,
        movieResults: null,
        movieNames: null,
    },
    reducers: {
      addToogleGptSearch: (state) => {
        state.toggleGptSearch = !state.toggleGptSearch
      },
      addGptMovieResult: (state, action) => {
        const { movieNames, movieResults } = action.payload;
        state.movieNames = movieNames;
        state.movieResults = movieResults;
      },
    },
});

export const { addToogleGptSearch, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
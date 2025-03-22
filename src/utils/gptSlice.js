import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gptSearch",
    initialState: {
        toggleGptSearch: false,
    },
    reducers: {
      addToogleGptSearch: (state) => {
        state.toggleGptSearch = !state.toggleGptSearch
      },
    }
});

export const { addToogleGptSearch } = gptSlice.actions;
export default gptSlice.reducer
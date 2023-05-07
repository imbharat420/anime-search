import { createSlice } from "@reduxjs/toolkit";
export const AnimeSlice = createSlice({
  name: "Anime",
  initialState: {
    animes: [],
    pagination: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    getAnimeFetch: (state) => {
      state.isLoading = true;
    },
    getAnimeSuccess: (state, action) => {
      state.animes = action.payload.data;
      state.pagination = action.payload.pagination;
      state.isLoading = false;
    },
    getAnimeFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const { actions, reducer } = AnimeSlice;
export const { getAnimeFetch, getAnimeSuccess, getAnimeFailure } = actions;
export default reducer;

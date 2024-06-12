import { createSlice } from "@reduxjs/toolkit";

export const wordTypeSlice = createSlice({
  name: "word_type",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    startLoadingWordType: (state) => {
      state.isLoading = true;
    },
    setDataWordType: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingWordType, setDataWordType } = wordTypeSlice.actions;

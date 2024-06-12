import { createSlice } from "@reduxjs/toolkit";

export const subGroupWordSlice = createSlice({
  name: "sub_group_word",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    startLoadingSubGroupWord: (state) => {
      state.isLoading = true;
    },
    setDataSubGroupWord: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingSubGroupWord, setDataSubGroupWord } =
  subGroupWordSlice.actions;

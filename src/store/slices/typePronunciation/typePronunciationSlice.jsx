import { createSlice } from "@reduxjs/toolkit";

export const typePronunciationSlice = createSlice({
  name: "type_pronunciation",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {
    startLoadingTypePronunciation: (state) => {
      state.isLoading = true;
    },
    setDataTypePronunciation: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadingTypePronunciation, setDataTypePronunciation } = typePronunciationSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: null,
  error: null,
  loading: false,
};

const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    fileUploadStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fileUploadSuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    fileUploadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fileUploadStart, fileUploadFailure, fileUploadSuccess } =
  fileSlice.actions;

export default fileSlice.reducer;

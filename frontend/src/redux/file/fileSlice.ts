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
    fileUploadSuccess: (state, action) => {
      state.files = [action.payload, ...state.files];
      state.loading = false;
      state.error = null;
    },
    fileUploadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getFilesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getFilesSuccess: (state, action) => {
      state.files = action.payload;
      state.loading = true;
      state.error = null;
    },
    getFilesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fileUploadStart,
  getFilesStart,
  getFilesSuccess,
  getFilesFailure,
  fileUploadFailure,
  fileUploadSuccess,
} = fileSlice.actions;

export default fileSlice.reducer;

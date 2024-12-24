import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loder",
  initialState: false,
  reducers: {
    loaderTrue: () => {
      return true;
    },
    loaderFalse: () => {
      return false;
    },
  },
});

export const { loaderTrue, loaderFalse } = loaderSlice.actions;

export default loaderSlice;

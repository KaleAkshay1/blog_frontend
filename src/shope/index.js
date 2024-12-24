import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userslice";
import loaderSlice from "./loaderSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    loader: loaderSlice.reducer,
  },
});

export default store;

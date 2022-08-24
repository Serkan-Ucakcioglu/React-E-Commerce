import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userAuth from "./userAuth";

const store = configureStore({
  reducer: {
    productSlice,
    userAuth
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/productSlice";
import userAuth from "../Features/userAuth";

const store = configureStore({
  reducer: {
    productSlice,
    userAuth,
  },
});

export default store;

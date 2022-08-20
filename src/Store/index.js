import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./productSlice";

const store = configureStore({
    reducer: {
        productSlice
    }
  
})

export default store;
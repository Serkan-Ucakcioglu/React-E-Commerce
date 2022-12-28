import { createSlice } from "@reduxjs/toolkit/";
import { getProduct } from "../Api/api";

const initialState = JSON.parse(localStorage.getItem("basket")) || {
  basket: [],
  entities: [],
  loading: false,
  count: 0,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      let isProductInBasket = state.basket.find(
        (product) => product.id === action.payload.id
      );

      if (!isProductInBasket) {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
        state.count++;
      } else {
        isProductInBasket.quantity++;
      }
      localStorage.setItem("basket", JSON.stringify(state));
    },
    remove: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
      state.count--;
      localStorage.setItem("basket", JSON.stringify(state));
      return state;
    },
    updateQuantity: (state, action) => {
      let isProductInBasket = state.basket.find(
        (product) => product.id === action.payload.id
      );

      if (!isProductInBasket) {
        state.count++;
      } else {
        isProductInBasket.quantity > 1 && isProductInBasket.quantity--;
      }
      localStorage.setItem("basket", JSON.stringify(state));
    },
  },
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    },
    [getProduct.rejected]: (state) => {
      state.loading = "hata var ";
    },
  },
});

export const selectedBasket = (state) => state.productSlice.basket;
export const selectedCount = (state) => state.productSlice.count;
export const productSlices = (state) => state.productSlice;

export const { addBasket, remove, updateQuantity } = productSlice.actions;
export default productSlice.reducer;

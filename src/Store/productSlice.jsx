import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

const initialState = {
  basket: [],
  entities: [],
  loading: false,
  count: 0,
};
export const getProduct = createAsyncThunk(
  "users/fetchByIdStatus",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

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
    },
    remove: (state, action) => {
      state.basket = state.basket.filter(
        (product) => product.id !== action.payload.id
      );
      state.count--;
      return state;
    },
    updateQuantity: (state,action) => {
      state.basket = state.basket((t) => {
        if (t.id === action.payload.id) {
          return { ...t, quantity: action.payload.quantity };
        } else {
          return t;
        }
      });
    }
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

export const { addBasket, remove,updateQuantity } = productSlice.actions;
export default productSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

const initialState = {
  basket: [],
  entities: [],
  loading: false,
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
  reducers: {},
  extraReducers: {
    [getProduct.pending]: (state) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
    [getProduct.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export default productSlice.reducer;

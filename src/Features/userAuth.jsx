import { createSlice } from "@reduxjs/toolkit/";
import { userCheck } from "../Api/api";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logOut: (user) => {
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userCheck.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userCheck.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        return state;
      })
      .addCase(userCheck.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const userAuths = (state) => state.userAuth;
export default userAuth.reducer;
export const { logOut } = userAuth.actions;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};


export const userCheck = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const userAuth = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
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

export default userAuth.reducer;

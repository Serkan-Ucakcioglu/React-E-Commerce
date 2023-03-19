import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk(
  "users/fetchByIdStatus",
  async (signal) => {
    const res = await fetch("https://fakestoreapi.com/products", signal);
    const data = await res.json();
    return data;
  }
);

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
      if (response.status !== 401) {
        localStorage.setItem("user", JSON.stringify(data));
      }
    } catch (e) {
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const deleteProduct = (data) => {
  fetch(`https://fakestoreapi.com/products/${data.id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  alert("api database işlemeye izin vermiyor console bak");
};

export const addProduct = (data) => {
  fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
  alert(`api database işlemeye izin vermiyor console bak
      ${JSON.stringify(data)}
    `);
};

export const updateUser = (data) => {
  fetch(`https://fakestoreapi.com/products/${data.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
  alert(`api database işlemeye izin vermiyor console bak
    ${JSON.stringify(data)}
  `);
};

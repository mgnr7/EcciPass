import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    //Simulacion de login
    login: (state) => {
      state.user = "demo";
      state.isLoggedIn = true;
    },
  },
});

export const { logout, login } = userSlice.actions;

//Agregar funcion de Login despues de implementar en el API

export default userSlice.reducer;

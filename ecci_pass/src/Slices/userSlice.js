import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    isRegistered: false,
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
    //Simulacion register
    register: (state) => {
      state.user = "registrado";
      state.isRegistered = true;
    }
  },
});

export const { logout, login, register } = userSlice.actions;

//Agregar funcion de Login despues de implementar en el API

export default userSlice.reducer;

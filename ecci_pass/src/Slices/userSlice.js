import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
      state.userName = "Usuario Demo";
      state.userType = "Estudiante";
      state.isLoggedIn = true;
    },
    //Simulacion register
    register: (state) => {
      state.user = "registrado";
      state.isRegistered = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postLogin.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.isLoggedIn = false;
          state.user = null;
          state.errorMessage = action.payload.message;
        } else {
          state.isLoggedIn = true;
          state.user = action.payload;
        }
      })
      .addCase(postLogin.rejected, (state) => {
        state.isLoggedIn = false;
        state.user = null;
      });
  },
});

export const { logout, login, register } = userSlice.actions;

export const postLogin = createAsyncThunk(
  "usuarios/postLogin",
  async (credentials) => {
    const loginFetch = await fetch("http://localhost:7500/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.username,
        password: credentials.password,
      }),
    });
    const userData = await loginFetch.json();
    if (loginFetch.status === 200) {
      return userData;
    } else {
      return {
        error: true,
        message: userData.error.message,
      };
    }
  }
);

export default userSlice.reducer;

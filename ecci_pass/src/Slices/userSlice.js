import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userName: "",
    userType: "",
    isLoggedIn: false,
    isRegistered: false,
    condition: false,
    userProfile: null,
    profileList: [],
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
    cleanState: (state) => {
      state.condition = false;
      state.userProfile = null;
      state.errorMessage = null;
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
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.profileList = [];
          state.errorMessage = action.payload.message;
        } else {
          state.profileList = action.payload;
        }
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.profileList = [];
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.userProfile = null;
          state.errorMessage = action.payload.message;
        } else {
          state.userProfile = action.payload;
        }
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.userProfile = null;
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

export const getUserProfile = createAsyncThunk(
  "users/getUserProfile",
  async (params, { getState }) => {
    const state = getState();
    const profileFetch = await fetch(
      "http://localhost:7500/users/user-profile",
      {
        headers: {
          Authorization: `Bearer ${state.user.user.token}`,
        },
      }
    );
    const profileData = await profileFetch.json();
    if (profileFetch.status === 200) {
      return profileData;
    } else {
      return {
        error: true,
        message: profileData.error.message,
      };
    }
  } 
);

export const getUserDetails = createAsyncThunk(
  "users/getUserDetails",
  async (userId, { getState }) => {
    const state = getState();
    const userProfileFetch = await fetch(
      `http://localhost:7500/users/user-details/${userId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.user.user.token}`,
        },
      }
    );
    const userProfileData = await userProfileFetch.json();
    if (userProfileFetch.status === 200) {
      return userProfileData;
    } else {
      return {
        error: true,
        message: userProfileData.error.message,
      };
    }
  }
);


export default userSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    userName: "",
    userType: "",
    isLoggedIn: false,
    isRegistered: false,
    userProfile: null,
    userList: [],
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
    //Simulacion registro
    register: (state) => {
      state.user = "demo";
      state.userName = "Usuario Demo";
      state.userType = "Estudiante";
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
      })
      .addCase(createUser.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.isRegistered = false;
          state.user = null;
          state.errorMessage = action.payload.message;
        } else {
          state.isRegistered = true;
          state.user = action.payload;
          state.errorMessage = null;
        }
      })
      .addCase(createUser.rejected, (state) => {
        state.isRegistered = false;
        state.user = null;
        state.errorMessage = "Error al crear usuario";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.userList = [];
          state.errorMessage = action.payload.message;
        } else {
          state.userList = action.payload;
        }
      })
      .addCase(getUserDetails.rejected, (state) => {
        state.userList = [];
      })
      .addCase(getProfileDetails.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.userProfile = null;
          state.errorMessage = action.payload.message;
        } else {
          state.userProfile = action.payload;
        }
      })
      .addCase(getProfileDetails.rejected, (state) => {
        state.userProfile = null;
        state.errorMessage = "Error al cargar perfil";
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

export const createUser = createAsyncThunk(
  "usuarios/createUser",
  async ({ user, userPicture }) => {

    const createUserFetch = await fetch("http://localhost:7500/users/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user),
    });

    const formData = new FormData();
    formData.append('file', userPicture);
    const uploadFileFetch = await fetch("http://localhost:7500/users/register", {
      //upload
      method: "POST",
      body: formData
    });
    const uploadFileData = await uploadFileFetch.json();
    user.picture = uploadFileData.url;

    const registerUserData = await createUserFetch.json();
    if (createUserFetch.status === 200) {
      return registerUserData;
    } else {
      return {
        error: true,
        message: registerUserData.error.message,
      };
    }
  }
);

//profile-details
export const getProfileDetails = createAsyncThunk(
  "usuarios/getProfileDetails",
  async (params, { getState }) => {
    const state = getState();
    const profileFetch = await fetch(
      "http://localhost:7500/users/profile-details",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.user.user.token}`,
        },
        body: JSON.stringify({
          userId: params.userId,
        }),
      }
    );
    const UserData = await profileFetch.json();
    if (profileFetch.status === 200) {
      return UserData;
    } else {
      return {
        error: true,
        message: UserData.error.message,
      };
    }
  }
);

//Profile
export const getUserDetails = createAsyncThunk(
  "devices/getUserDetails",
  async (params, { getState }) => {
    const state = getState();
    const userProfileFetch = await fetch(
      "http://localhost:7500/devices/profile",
      {
        headers: {
          Authorization: `Bearer ${state.user.user.token}`,
        },
      }
    );
    const userData = await userProfileFetch.json();
    if (userProfileFetch.status === 200) {
      return userData; //Datos del usuario
    } else {
      return {
        error: true,
        message: userData.error.message,
      };
    }
  }
);

export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: "user",
    initialState: {
      user: null,
      isLoggedIn: false,
    },
    reducers: {
      register: (state) => {
        state.user = null;
        state.isRegistered = false;
      },
      registered: (state) => {
        state.user = "registrado";
        state.isRegistered = true;
      },
    },
  });
  
  export const { register, registered } = registerSlice.actions;
  export default registerSlice.reducer;

  //TODO- Logica de slices register
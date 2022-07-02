import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    devices: null,
    devicesList: [],
  },
  extraReducers(builder) {
    builder
      .addCase(getAllDevices.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.devicesList = [];
          state.errorMessage = action.payload.message;
        } else {
          state.devicesList = action.payload;
        }
      })
      .addCase(getAllDevices.rejected, (state) => {
        state.devicesList = [];
      })
      .addCase(getUserDevices.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.devicesList = [];
          state.errorMessage = action.payload.message;
        } else {
          state.devicesList = action.payload;
        }
      })
      .addCase(getUserDevices.rejected, (state, action) => {
        state.devicesList = [];
      });
  },
});

export const getAllDevices = createAsyncThunk(
  "devices/getAllDevices",
  async (params, { getState }) => {
    const state = getState();
    const devicesFetch = await fetch("http://localhost:7500/devices", {
      headers: {
        Authorization: `Bearer ${state.user.user.token}`,
      },
    });
    const devicesData = await devicesFetch.json();
    if (devicesFetch.status === 200) {
      return devicesData;
    } else {
      return {
        error: true,
        message: devicesData.error.message,
      };
    }
  }
);

export const getUserDevices = createAsyncThunk(
  "devices/getUserDevices",
  async (params, { getState }) => {
    const state = getState();
    const devicesFetch = await fetch(
      "http://localhost:7500/devices/user-devices",
      {
        headers: {
          Authorization: `Bearer ${state.user.user.token}`,
        },
      }
    );
    const devicesData = await devicesFetch.json();
    if (devicesFetch.status === 200) {
      return devicesData;
    } else {
      return {
        error: true,
        message: devicesData.error.message,
      };
    }
  }
);

export default devicesSlice.reducer;

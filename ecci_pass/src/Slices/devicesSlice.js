import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    userDevice: null,
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
      .addCase(getUserDevices.rejected, (state) => {
        state.devicesList = [];
      })
      .addCase(getDeviceDetails.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.userDevice = null;
          state.errorMessage = action.payload.message;
        } else {
          state.userDevice = action.payload;
        }
      })
      .addCase(getDeviceDetails.rejected, (state) => {
        state.userDevice = null;
      })
      .addCase(deviceDelete.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.userDevice = null;
          state.errorMessage = action.payload.message;
        } else {
          state.userDevice = action.payload;
        }
      })
      .addCase(deviceDelete.rejected, (state) => {
        state.userDevice = null;
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

export const getDeviceDetails = createAsyncThunk(
  "devices/getDeviceDetails",
  async (params, { getState }) => {
    const state = getState();
    const deviceFetch = await fetch(
      "http://localhost:7500/devices/device-details",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.user.user.token}`,
        },
        body: JSON.stringify({
          deviceId: params.deviceId,
        }),
      }
    );
    const deviceData = await deviceFetch.json();
    if (deviceFetch.status === 200) {
      return deviceData;
    } else {
      return {
        error: true,
        message: deviceData.error.message,
      };
    }
  }
);

export const deviceDelete = createAsyncThunk(
  "devices/DeviceDelete",
  async (params, { getState }) => {
    const state = getState();
    const deviceFetch = await fetch(
      `http://localhost:7500/devices/device-delete/${params.deviceId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${state.user.user.token}`,
        },
      }
    );
    const deviceData = await deviceFetch.json();
    if (deviceFetch.status === 200) {
      return deviceData;
    } else {
      return {
        error: true,
        message: deviceData.error.message,
      };
    }
  }
);

export default devicesSlice.reducer;

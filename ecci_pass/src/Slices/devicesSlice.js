import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const devicesSlice = createSlice({
  name: "devices",
  initialState: {
    condition: false,
    userDevice: null,
    devices: null,
    devicesList: [],
  },
  reducers: {
    cleanState: (state) => {
      state.condition = false;
      state.userDevice = null;
      state.errorMessage = null;
    },
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
      .addCase(registerDevice.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.condition = false;
          state.userDevice = null;
          state.errorMessage = action.payload.message;
        } else {
          console.log("Entro al else: ", action.payload);
          state.condition = true;
          state.userDevice = action.payload;
        }
      })
      .addCase(registerDevice.rejected, (state) => {
        state.condition = false;
        state.userDevice = null;
        state.errorMessage = "Ocurrió un error al registar el dispositivo";
      });
  },
});

export const { cleanState } = devicesSlice.actions;

export const getAllDevices = createAsyncThunk(
  "devices/getAllDevices",
  async (params, { getState }) => {
    const state = getState();
    const devicesFetch = await fetch(
      `${process.env.REACT_APP_API_URL}/devices`,
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

export const getUserDevices = createAsyncThunk(
  "devices/getUserDevices",
  async (params, { getState }) => {
    const state = getState();
    const devicesFetch = await fetch(
      `${process.env.REACT_APP_API_URL}/devices/user-devices`,
      {
        headers: {
          "Content-type": "application/json",
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
  async (deviceId, { getState }) => {
    const state = getState();
    const deviceFetch = await fetch(
      `${process.env.REACT_APP_API_URL}/devices/device-details/${deviceId}`,
      {
        method: "GET",
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

export const registerDevice = createAsyncThunk(
  "devices/registerDevice",
  async ({ device, picture }, { getState }) => {
    const state = getState();
    const formData = new FormData();
    formData.append("file", picture);
    const uploadFileFetch = await fetch(
      `${process.env.REACT_APP_API_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    const uploadFileData = await uploadFileFetch.json();
    device.imageUrl = uploadFileData.url;

    const registerDeviceFetch = await fetch(
      `${process.env.REACT_APP_API_URL}/devices/register-device`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.user.user.token}`,
        },
        body: JSON.stringify(device),
      }
    );

    const deviceData = await registerDeviceFetch.json();
    if (registerDeviceFetch.status === 200) {
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

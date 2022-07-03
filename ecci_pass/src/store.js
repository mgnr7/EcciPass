import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import userSlice from "./Slices/userSlice";
import devicesSlice from "./Slices/devicesSlice";

const reducers = combineReducers({
  user: userSlice,
  devices: devicesSlice,
});

const rootPersistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;

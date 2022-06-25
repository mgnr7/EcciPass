import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import Help from "../Help";
import DeviceRegister from "../DeviceRegister";
import DeviceDetails from "../DeviceDetails";
import PrivateRoute from "../../Component/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="device-details/:id" element={<DeviceDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="help" element={<Help />} />
        <Route path="deviceRegister" element={<DeviceRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

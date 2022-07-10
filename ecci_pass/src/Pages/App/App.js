import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import Profile from "../Profile";
import Help from "../Help";
import DeviceDetails from "../DeviceDetails";
import PrivateRoute from "../../Component/PrivateRoute";
import GenerateVoucher from "../GenerateVoucher";
import RegisterDevice from "../RegisterDevice";
import AdminHome from "../Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path="/" element={<Home />} />
          <Route path="device-details/:id" element={<DeviceDetails />} />
          <Route path="generate-voucher/:id" element={<GenerateVoucher />} />
          <Route path="admin-home" element={<AdminHome />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="registerDevice" element={<RegisterDevice />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

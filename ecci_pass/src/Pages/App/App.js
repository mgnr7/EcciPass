import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import Profile from "../Profile";
import Help from "../Help";
import DeviceDetails from "../DeviceDetails";
import PrivateRoute from "../../Component/PrivateRoute";
import RegisterDevice from "../RegisterDevice";

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
        <Route path="profile" element={<Profile />} />
        <Route path="help" element={<Help />} />
        <Route path="registerDevice" element={<RegisterDevice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

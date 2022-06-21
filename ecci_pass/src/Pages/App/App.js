import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Home from "../Home";
import Register from "../Register";
import Profile from "../Profile";
import Help from "../Help";
import DeviceDetails from "../DeviceDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="help" element={<Help />} />
        <Route path="device-details/:id" element={<DeviceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

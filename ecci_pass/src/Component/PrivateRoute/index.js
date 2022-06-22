import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children, redirectPath = "/login" }) {
  const userState = useSelector((state) => state.user);
  console.log("User LoggedIn: ", userState.isLoggedIn);
  if (!userState.isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children || <Outlet />;
}

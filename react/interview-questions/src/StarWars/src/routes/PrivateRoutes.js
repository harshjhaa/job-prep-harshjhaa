import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../customHooks/useAuth";
const PrivateRoutes = () => {
  const isLoggedIn = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

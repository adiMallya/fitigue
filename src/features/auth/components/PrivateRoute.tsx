import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "src/shared";

const PrivateRoute : React.FC = ()  => {
  const location = useLocation();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);  
    
  return !isAuthenticated ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export { PrivateRoute };
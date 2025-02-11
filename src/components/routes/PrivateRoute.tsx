import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

const PrivateRoute: React.FC = () => {
  const { user } = useAuthStore();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

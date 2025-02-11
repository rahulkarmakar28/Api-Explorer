import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";

const PublicRoute: React.FC = () => {
  const { user } = useAuthStore();
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;

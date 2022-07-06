import { useLocation, Navigate } from "react-router";
import { useAuth } from "../context/context";

export default function RouteAuth({ children }) {
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

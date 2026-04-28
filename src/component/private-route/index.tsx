import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../hook/useAuth";

export function PrivateRoute( {children}: {children: React.ReactNode}) {
  const {user} = useAuth();
  const location = useLocation();
  
  if (user == null) {
    return <Navigate to="/login" state={{from: location.pathname}} replace/>;
  }
  return <>{children}</>;
}
import { Navigate, useLocation } from "react-router-dom";
const PageProtector = ({ isAuthenticated, children, user }) => {
  const Location = useLocation();
  console.log(isAuthenticated);
  if (
    !isAuthenticated &&
    !(Location.pathname.includes("/auth/login") ||
      !(Location.pathname.includes("/auth/register")))
  ) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

export default PageProtector;

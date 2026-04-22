import { NavLink, Outlet, useNavigate } from "react-router";

import "./category-layout.css";
import { Suspense, useCallback } from "react";
import { useAuth } from "../hook/useAuth";
import ErrorBoundary from "../component/ErrorBoundary";

export function CategoryLayout() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const logoutHander = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setUser(null);
      navigate("/");
    },
    [setUser, navigate],
  );

  return (
    <>
      <nav className="nav">
        <h3>Categories</h3>
        <ul>
          <li>
            <NavLink to="/">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to="/" onClick={logoutHander}>
                Logout {user.name}
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

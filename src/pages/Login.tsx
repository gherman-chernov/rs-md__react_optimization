import { useRef } from "react";
import { useAuth } from "../hook/useAuth";
import { useLocation, useNavigate } from "react-router";

export function Login() {
  const value = useRef<string | null>(null);
  const navigate = useNavigate();
  const {setUser} = useAuth();
  const location = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <label>Name: </label>
      <input onChange={e => value.current = e.target.value}/>
      <button onClick={() => {
        if (value.current) {
          setUser({name:value.current, id: 1});
          navigate(location.state?.from || '/', {
            replace: true,
          });
        }
      }}>Login</button>
    </div>
  );
}
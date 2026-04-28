import { useRef } from "react";
import { useAuth } from "../../hook/useAuth";
import { useLocation, useNavigate } from "react-router";
import { Button, Input, Space } from "antd";

export function Login() {
  const value = useRef<string | null>(null);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const location = useLocation();

  return (
    <div>
      <h1>Login</h1>
      <Space size={16}>
        <Space.Compact>
          <Space.Addon>Name: </Space.Addon>
          <Input onChange={(e) => (value.current = e.target.value)} />
        </Space.Compact>
        <Button
          onClick={() => {
            if (value.current) {
              setUser({ name: value.current, id: 1 });
              navigate(location.state?.from || "/", {
                replace: true,
              });
            }
          }}
        >
          Login
        </Button>{" "}
      </Space>
    </div>
  );
}

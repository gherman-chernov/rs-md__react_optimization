import { Outlet, useNavigate } from "react-router";

import { Suspense } from "react";
import { useAuth } from "../hook/useAuth";
import ErrorBoundary from "../component/error-boundary";
import { Layout, Menu, type MenuItemProps } from "antd";

const { Header, Content } = Layout;
type ClickHandler =  Exclude<MenuItemProps["onClick"], undefined>;

export function CategoryLayout() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const items = [
    { key: "/", label: "Characters" },
    { key: "/episodes", label: "Episodes" },
    { key: "/locations", label: "Locations" },
    user ? { key: "/logout", label: "Logout" } : { key: "/login", label: "Login" },
  ];
  const clickHandler: ClickHandler = (i: Parameters<ClickHandler>[0]) => {
    if (i.key === '/logout') {
      setUser(null);
      navigate("/");
      return;
    }
    navigate(i.key)
  }

  return (
    <Layout>
      <Header style={{padding: '0px'}}>
        <Menu mode="horizontal" onClick={clickHandler} items={items} />
      </Header>
      <Content>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Content>
    </Layout>
  );
}

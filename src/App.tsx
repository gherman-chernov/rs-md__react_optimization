import { Outlet } from "react-router";
import { AuthProvider } from "./context/AuthProvider";
import { Layout } from "antd";

function App() {
  return (
    <Layout>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </Layout>
  );
}

export default App;

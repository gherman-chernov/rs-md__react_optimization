import { Outlet } from "react-router";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <>
      <header>
        <h2>Welcome to 'Rick & Morty' fan page!</h2>
      </header>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  );
}

export default App;

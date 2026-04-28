import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { RouterProvider } from "react-router";
import { router } from "./router.tsx";


import { ConfigProvider, theme } from "antd";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        algorithm: [theme.defaultAlgorithm, theme.compactAlgorithm],
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
);

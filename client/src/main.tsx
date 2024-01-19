import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoutes from "./routes/Routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MyRoutes />
    </React.StrictMode>
);

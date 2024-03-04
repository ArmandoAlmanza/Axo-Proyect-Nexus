import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import ProjectView from "../components/Dashboard/ProjectView";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/auth",
        element: <Auth />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <ProjectView />,
            },
        ],
    },
]);

const MyRoutes = () => {
    return <RouterProvider router={router} />;
};

export default MyRoutes;

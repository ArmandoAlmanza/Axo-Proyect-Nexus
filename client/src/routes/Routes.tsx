import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import ProjectView from "../components/Dashboard/ProjectView";

/* 
    * Here we create the router for our app.
    * We're going to use 3 principals, the landing page, the auth and finally the dashboard
    - The Dashboard have childrens so we can visit them using /dashboard/tasks/{id}
*/

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

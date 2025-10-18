import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import MainContent from "../components/MainContent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainContent />
            }
        ]
    }
]);
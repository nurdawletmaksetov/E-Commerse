import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import MainContent from "../components/MainContent";
import ProductPage from "../components/ProductPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <MainContent />
            },
            {
                path: "/product/:id",
                element: <ProductPage />
            }
        ]
    }
]);
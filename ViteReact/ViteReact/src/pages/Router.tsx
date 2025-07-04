import { createBrowserRouter, RouterProvider } from "react-router";
import IndexPage from "./quest/IndexPage";


const router = createBrowserRouter([
    {
        path: "/frontend",
        children: [
            { index: true, Component: IndexPage },
            { path: "zxc", element: <div>ZXC</div> }
        ]
    }
]);

const Router = () => <RouterProvider router={router} />

export default Router;
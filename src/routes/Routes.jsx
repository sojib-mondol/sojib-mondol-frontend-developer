import NotFoundPage from "../components/shared/notFoundPage/NotFoundPage";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Home } = require("../pages/home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            }
        ]
    }
])
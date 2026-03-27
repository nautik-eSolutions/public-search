import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import LoginLayout from "../domain/login/LoginLayout.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path:"/login",
        Component: LoginLayout
    }
]);
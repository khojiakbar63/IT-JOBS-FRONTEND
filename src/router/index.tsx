import { HomePage, SignInPage, SignUpPage } from "@/pages";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter: FC = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage/> },
    { path: "/auth/sign-up", element: <SignUpPage/> },
    { path: "/auth/sign-in", element: <SignInPage/> },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;

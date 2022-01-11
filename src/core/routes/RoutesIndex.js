import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../views/Error/Error";
const LoginPage = lazy(() => import("../../views/public/Login"));
const ForgetPasswordPage = lazy(() =>
  import("../../views/public/ForgetPassword")
);
const Home = lazy(() => import("../../views/private/Home"));
const Settings = lazy(() => import("../../views/private/Settings"));
const User = lazy(() => import("../../views/private/UserManagement"));
export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<LoginPage />} />
          <Route path="forgetpassword" element={<ForgetPasswordPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="users" element={<User />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

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
const EmailSettings = lazy(() =>
  import("../../views/private/Settings/EmailSetting")
);
const SMSSettings = lazy(() =>
  import("../../views/private/Settings/SmsSetting")
);
const User = lazy(() => import("../../views/private/UserManagement"));
const ChangePassword = lazy(() => import("../../views/private/ChangePassword"));
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
          <Route path="settings/email-setting" element={<EmailSettings />} />
          <Route path="settings/sms-config" element={<SMSSettings />} />
          <Route path="/change-password" element={<ChangePassword />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

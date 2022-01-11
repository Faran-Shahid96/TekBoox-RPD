import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
export default function PublicRoute(props) {
  return (
    <BasicLayout {...props}>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </BasicLayout>
  );
}

import { lazy } from "react";

const routes = [
  {
    path: "/",
    exact: true,
    component: lazy(() => import("@/pages/Home")),
  },
  {
    path: "/about",
    component: lazy(() => import("@/pages/About")),
  },
];

export default routes;

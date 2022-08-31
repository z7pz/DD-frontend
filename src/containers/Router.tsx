import { h } from "preact";
import "@styles/index.scss";
import { Outlet, Router, ReactLocation, Route } from "@tanstack/react-location";
import Application from "@containers/Application";

const routes: Route[] = [
  {
    children: [
      // { path: "/", element: <Application /> },
      { path: ":id/:type", element: <Application /> },
      { path: ":id", element: <Application /> },
    ],
  },
];

export function App() {
  const location = new ReactLocation();
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
}

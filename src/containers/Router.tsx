import { h } from "preact";
import "@styles/index.scss";
import { Outlet, Router, ReactLocation, Route } from "@tanstack/react-location";
import Application from "@containers/Application";
import { usePath } from "@hooks";
import { LandingPage } from "./pages";
import { Guilds } from "./pages/Guilds";

export function App() {
  const routes: Route[] = [
    {
      children: [
        { path: "/", element: <LandingPage /> },
        { path: "guilds", element: <Guilds /> },
        {
          path: ":id/:type",
          element: <Application />,
        },
        // { path: ":id", element: <Application /> },
      ],
    },
  ];

  const location = new ReactLocation();
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
}

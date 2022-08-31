import { h } from "preact";
import "@styles/index.scss";
import { Outlet, Router, ReactLocation, Route } from "@tanstack/react-location";
import Application from "@containers/Application";
import { usePath } from "@hooks";
import { paths } from "@utils/constants";

export function App() {
  const { is404 } = usePath(paths);
  console.log(is404)
  const routes: Route[] = [
    {
      children: [
        // { path: "/", element: <Application /> },
        {
          path: ":id/:type",
          element: !is404 ? <Application /> : null,
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

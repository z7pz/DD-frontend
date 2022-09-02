import { useNavigate } from "@tanstack/react-location";
import { PATHS } from "@utils/constants";
//  [["overview", ["Overview", EyeIcon]]];

export function usePath() {
  const paths = window.location.pathname.split("/").filter(Boolean);
  const nav = useNavigate();
  const id = paths[0];
  const path = paths[1];
  const is404 = !path || !PATHS.find((arr) => arr[0] == path);
  const navigate = (newPath: string) => {
    nav({ to: `/${id}/${newPath}` });
  };
  return { is404, path, id, navigate };
}

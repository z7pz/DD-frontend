import { useNavigate } from "@tanstack/react-location";
import { PATHS } from "@utils/constants";
//  [["overview", ["Overview", EyeIcon]]];

export function usePath() {
  const paths = window.location.pathname.split("/").filter(Boolean);
  const nav = useNavigate();
  const id = paths[1];
  const path = paths[2];
  console.log(paths)
  const data = PATHS.find((arr) => arr[0] == path);
  const is404 = !path || !data;
  const navigate = (newPath: string) => {
    nav({ to: `/dashboard/${id}/${newPath}` });
  };
  return { is404, data, id, navigate };
}

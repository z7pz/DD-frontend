import { h, Fragment } from "preact";
import { useMatch } from "@tanstack/react-location";
import { paths } from "@utils/constants";

function usePath(arr: string[]) {
  const { pathname } = useMatch();
  const type = pathname.split("/").filter(Boolean)[1];
  const is404 = !type || !arr.includes(type);
  return { is404, type, pathname };
}

export default function Application() {
  const { is404 } = usePath(paths);
  return <>test</>;
}

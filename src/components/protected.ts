import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";
import { useEffect } from "preact/hooks";

export const Protected = observer(
  ({ children, redirect = false }: { children: any; redirect?: boolean }) => {
    const { auth } = useAppState();
    useEffect(() => {
      auth.check();
    }, []);
    if (auth.loggin) return "logging";
    return redirect ? (window.location.href = "/") : children;
  }
);

import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";

export const NComp = observer(({ children }: any) => {
  const { auth } = useAppState();
  console.log(auth.loggedIn)
  return !auth.loggedIn ? children : "";
})

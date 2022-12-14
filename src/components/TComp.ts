import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";

export const TComp = observer(({ children }: any) => {
  const { auth } = useAppState();
   return auth.loggedIn ? children : "";
})

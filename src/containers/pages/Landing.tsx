import { Navbar } from "@components/navbar";
import { Protected } from "@components/protected";
import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";
import { h } from "preact";
import { useEffect } from "preact/hooks";
export const LandingPage = observer(() => {
  const { auth } = useAppState();
  useEffect(() => {
    auth.check();
  }, []);
  return (
    <Protected>
      <Navbar />
    </Protected>
  );
});

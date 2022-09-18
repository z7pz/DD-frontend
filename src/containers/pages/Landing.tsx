import { useLogin } from "@hooks/useLogin";
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
export function LandingPage() {
  let login = useLogin("landing");

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        console.log("wtf");
      },
      false
    );
  }, []);
  return <button onClick={login.auth}>Login</button>;
}

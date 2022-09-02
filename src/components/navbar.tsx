import { h } from "preact";
import styles from "@styles/pages/index.module.scss";
import { BrandIcon } from "@components/assets";

function LoginButton() {
  return <div as="button" class={styles.button}>LOGIN</div>;
}

export function Navbar() {
  return (
    <div class={styles.navbar}>
      <div class={styles.container}>
        <div class={styles.title}>DDBOT</div>
        <div class={styles.icon}>
          <BrandIcon />
        </div>
        <div class={styles.right}>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

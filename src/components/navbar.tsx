import { h, Fragment } from "preact";
import styles from "@styles/pages/index.module.scss";
import { BrandIcon, LogoutIcon } from "@components/assets";
import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";
import { NComp } from "./NComp";
import { TComp } from "./TComp";
export const Navbar = observer(function () {
  const { auth } = useAppState();
  return (
    <div class={styles.navbar}>
      <div class={styles.container}>
        <div class={styles.title}>DDBOT</div>
        <div class={styles.icon}>
          <BrandIcon />
        </div>
        <div class={styles.right}>
          <TComp>
            <img class={styles.icon} src={auth.user?.displayAvatarURL} alt="" />
            <div class={styles.username}>{auth.user?.username}</div>
            <div class={styles.divider} />
            <div onClick={async() => await auth.logout()} class={styles.logout}>
              <LogoutIcon />
            </div>
          </TComp>
          <NComp>
            <div onClick={() => auth.login()} as="button" class={styles.button}>
              LOGIN
            </div>
          </NComp>
        </div>
      </div>
    </div>
  );
});

import { h, Fragment } from "preact";
import { PATHS } from "@utils/constants";
import { usePath } from "@hooks";
import { useEffect, useState } from "preact/hooks";
import styles from "@styles/pages/dashboard/index.module.scss";
import { Navbar } from "@components/navbar";
import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";

export default observer(function Application() {
  const { dashboard } = useAppState();
  const { data, navigate } = usePath();
  const PlayGroundComponent = data![1][2];
  const [loading, setLoading] = useState(true);
  const [server, setServer] = useState();
  useEffect(() => {}, []);

  return (
    <div class={styles.application}>
      <Navbar />
      <div class={styles.wrapper}>
        <div class={styles.sidebar}>
          <div class={styles.server}>
            <div class={styles.icon}>
              <img src="" alt="" />
            </div>
            <div class={styles.name}>{dashboard.test}</div>
          </div>
          {PATHS.map(([path_map, [name, Icon]]) => (
            <div
              class={`${styles.item} ${
                data![0] == path_map ? styles.active : ""
              }`}
              onClick={() => navigate(path_map)}
            >
              <div class={styles.icon}>
                <Icon />
              </div>
              <div class={styles.name}>{name}</div>
            </div>
          ))}
        </div>
        <div class={styles.playground}>
          <PlayGroundComponent />
        </div>
      </div>
    </div>
  );
})
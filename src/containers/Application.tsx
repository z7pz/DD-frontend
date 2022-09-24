import { h } from "preact";
import { PATHS } from "@utils/constants";
import { usePath } from "@hooks";
import { useEffect } from "preact/hooks";
import styles from "@styles/pages/dashboard/index.module.scss";
import { Navbar } from "@components/navbar";
import { useAppState } from "@utils/mobx/State";
import { observer } from "mobx-react-lite";

export default observer(function Application() {
  const { dashboard, auth } = useAppState();
  const { data, navigate, is404, id } = usePath();
  useEffect(() => {
    if (is404) return navigate(PATHS[0][0] as string);
    if (!dashboard.guild.fetched) {
      (async () => {
        try {
          await auth.check();
          await dashboard.guild.fetch(id);
        } catch (err) {
          console.log(err);
          window.location.href = "/guilds";
        }
      })();
    }
  }, []);
  const PlayGroundComponent = data![1][2];

  return (
    (dashboard.guild.fetched && auth.loggedIn) && (
      <div class={styles.application}>
        <Navbar />
        <div class={styles.wrapper}>
          <div class={styles.sidebar}>
            <div class={styles.server}>
              <div class={styles.icon}>
                <img
                  src={`https://cdn.discordapp.com/icons/${dashboard.guild.id}/${dashboard.guild.icon}.png`}
                  alt=""
                />
              </div>
              <div class={styles.name}>{dashboard.guild.name}</div>
            </div>
            {PATHS.map(([path_map, [name, Icon]]) => (
              <div
                class={`${styles.item} ${
                  data![0] == path_map ? styles.active : ""
                }`}
                onClick={() => navigate(path_map as string)}
              >
                <div class={styles.icon}>
                  <Icon />
                </div>
                <div class={styles.name}>{name}</div>
              </div>
            ))}
          </div>
          <div class={styles.playground}>
            <div class={styles.container}>
              <div class={styles.title}>{data![1][0]}</div>
              <PlayGroundComponent />
            </div>
          </div>
        </div>
      </div>
    )
  );
});

import { Fragment, h } from "preact";
import { observer } from "mobx-react-lite";
import { Protected } from "@components/protected";
import { Navbar } from "@components/navbar";
import { useAppState } from "@utils/mobx/State";
import { useEffect } from "preact/hooks";
import styles from "@styles/pages/guilds.module.scss";
import { IGuild } from "@utils/mobx/interfaces";
import { IMapEntry } from "mobx";
export const Guilds = observer(() => {
  const { dashboard } = useAppState();
  useEffect(() => {
    dashboard.fetch_guilds();
  });
  return (
    <Protected redirect>
      <Navbar />
      {dashboard.fetching ? (
        <div>Fetching guilds...</div>
      ) : (
        <div class={styles.container}>
          <div class={styles.title}>CHOOSE A SERVER</div>
          <div class={styles.guilds}>
            {Array.from(dashboard.guilds).map(([key, value]) => (
              <Fragment>
                <div class={styles.card}>
                  <img
                    class={styles.icon}
                    src={`https://cdn.discordapp.com/icons/${value.id}/${value.icon}.png`}
                  />
                  <div class={styles.name}>{value.name}</div>
                  <button class={styles.go}><a href={`/dashboard/${value.id}`}>GO</a></button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </Protected>
  );
});

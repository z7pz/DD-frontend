import { h, Fragment } from "preact";
import styles from "@styles/pages/dashboard/general_settings.module.scss";
import { useState } from "preact/hooks";

function SetPrefixContainer({
  handleDefaultPrefix,
  isDefaultPrefix,
}: {
  isDefaultPrefix: boolean;
  handleDefaultPrefix: () => unknown;
}) {
  return (
    <div class={styles.wrapper}>
      <div class={styles.header}>
        <div class={styles.title}>PREFIX</div>
        <div class={styles.option} onClick={handleDefaultPrefix}>
          <div class={styles.title}>default</div>
          <div class={styles.divider} />
          <div
            class={`${styles.checkbox} ${isDefaultPrefix && styles.activebox}`}
          />
        </div>
      </div>
      <div class={styles.input}>
        <div class={styles.label}>
          Set your prefex
          <span
            style={{
              fontWeight: 700,
              color: "#a4a4a4",
            }}
          >
            {" "}
            - max 5
          </span>
        </div>
        <input />
      </div>
      <div class={styles.buttons}>
        <button class={styles.reset}>RESET</button>
        <button class={styles.save}>SAVE</button>
      </div>
    </div>
  );
}
function SetLanguageContainer({
  handleDefaultLanguage,
  isDefaultLanguage,
}: {
  isDefaultLanguage: boolean;
  handleDefaultLanguage: () => unknown;
}) {
  return (
    <div class={styles.wrapper}>
      <div class={styles.header}>
        <div class={styles.title}>Language</div>
        <div class={styles.option} onClick={handleDefaultLanguage}>
          <div class={styles.title}>default</div>
          <div class={styles.divider} />
          <div
            class={`${styles.checkbox} ${
              isDefaultLanguage && styles.activebox
            }`}
          />
        </div>
      </div>
      <div class={styles.input}>
        <div class={styles.label}>Chose your server language</div>
        <input />
      </div>
      <div class={styles.buttons}>
        <button class={styles.reset}>RESET</button>
        <button class={styles.save}>SAVE</button>
      </div>
    </div>
  );
}

export function GeneralSettings() {
  const [isDefaultPrefix, setIsDefaultPrefix] = useState(false);
  const [isDefaultLanguage, setIsDefaultLanguage] = useState(false);
  const handleDefaultPrefix = () => {
    setIsDefaultPrefix(!isDefaultPrefix);
  };
  const handleDefaultLanguage = () => {
    setIsDefaultLanguage(!isDefaultLanguage);
  };
  return (
    <>
      <div class={styles.container}>
        <div class={styles.top1}>
          <SetPrefixContainer
            isDefaultPrefix={isDefaultPrefix}
            handleDefaultPrefix={handleDefaultPrefix}
          />
        </div>
        <div class={styles.top2}>
          <SetLanguageContainer
            isDefaultLanguage={isDefaultLanguage}
            handleDefaultLanguage={handleDefaultLanguage}
          />
        </div>
        <div class={styles.down}></div>
      </div>
    </>
  );
}

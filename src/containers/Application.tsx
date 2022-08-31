import { h, Fragment } from "preact";
import { paths } from "@utils/constants";
import { usePath } from "@hooks";
import { useEffect, useState } from "preact/hooks";
import styles from '@styles/pages/dashboard/index.module.scss'
export default function Application() {
  const { type } = usePath(paths);
  const [loading, setLoading] = useState(true);
  const [server, setServer] = useState();
  useEffect(() => {

  }, []);

  return <div class="application"></div>;
}

import Ad from "./Ad";
import Main from "./Main";
import styles from "./styles.module.scss";
import Top from "./top";

export default function Header() {
  return <header className={styles.header}>
    <Ad></Ad>
    <Top></Top>
    <Main/>
  </header>
}

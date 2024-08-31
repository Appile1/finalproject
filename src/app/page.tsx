import Image from "next/image";
import styles from "./page.module.css";
import ChatArea from "../componets/chathelpai/ChatAi.js";
export default function Home() {
  return (
    <main className={styles.main}>
      <ChatArea />
    </main>
  );
}

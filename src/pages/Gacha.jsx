import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import characters from "../data/character";
import styles from "./Gacha.module.css"
import Button from "../components/Button/Button";

export default function Gacha({ ownedCharacters, setOwnedCharacters }) {
  const navigate = useNavigate();

  const handleGacha = () => {
    // ランダム選出したキャラクターのindexを取得
    const randomIndex = Math.floor(Math.random() * characters.length);
    const selecterCharacter = characters[randomIndex];

    // マイページの所持キャラクターに保存
    setOwnedCharacters([...ownedCharacters, selecterCharacter]);

    // 引いたキャラクターの情報を保持してRESULTに遷移
    navigate(ROUTES.RESULT, { state: { character: selecterCharacter } });
  }

  return (
    <>
      <div className={styles.gachaSection}>
        <h2>キャラ召喚</h2>
        <p className={styles.gachaHint}>SSR 2% / SR 10% / R 28% / N 60%</p>
        <Button variant="gacha" onClick={handleGacha}>ガチャる！</Button>
        <Link to={ROUTES.HOME} className={styles.link}>HOMEへ戻る</Link>
      </div>
    </>
  )
}
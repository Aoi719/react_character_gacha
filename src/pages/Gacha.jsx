import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import characters from "../data/character";
import styles from "./Gacha.module.css"
import Button from "../components/Button/Button";
import PrimaryHeading from "../components/Heading/PrimaryHeading";

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
        <PrimaryHeading>キャラ召喚</PrimaryHeading>
        <p className={styles.gachaHint}>当選確率<br />SSR 2% / SR 10% / R 28% / N 60%</p>
        <Button variant="gacha" onClick={handleGacha}>ガチャる！</Button>
        <Link to={ROUTES.HOME} className={styles.link}>HOMEへ戻る</Link>
      </div>
    </>
  )
}
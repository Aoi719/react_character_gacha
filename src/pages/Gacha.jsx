import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import characters from "../data/character";

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
    <PageWrapper>
      <div>Gacha</div>
      <button onClick={handleGacha}>ガチャる！</button>
    </PageWrapper>
  )
}



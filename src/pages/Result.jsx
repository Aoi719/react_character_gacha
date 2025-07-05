import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"

export default function Result() {
  const location = useLocation();
  const character = location.state?.character;

  if (!character) {
    return (
      <PageWrapper>
        <p>ガチャ結果が見つかりません。</p>
        <Link to={ROUTES.GACHA}>もう一度引く</Link>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper>
      <h2>ガチャ結果</h2>
      <div>
        <h3>{character.name}</h3>
        <p>レアリティ：{character.rarity}</p>
        <p>属性：{character.type}</p>
        <p>{character.description}</p>
      </div>
      <Link to={ROUTES.GACHA}>もう一度引く</Link>
      <br />
      <Link to={ROUTES.MYPAGE}>マイページへ</Link>
    </PageWrapper>
  )
}


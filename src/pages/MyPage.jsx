import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"

export default function MyPage({ ownedCharacters }) {
  return (
    <PageWrapper>
      <h2>所持キャラクター一覧</h2>
      {
        ownedCharacters.length === 0 ? (
          <p>まだキャラを持っていません。</p>
        ) : (
          <ul>
            {ownedCharacters.map((chara, index) => (
              <li key={`chara-${index}`}>
                <strong>{chara.name}</strong><br />
                （レアリティ：{chara.rarity} / 属性；{chara.type}）
              </li>
            )
            )}
          </ul>
        )
      }
      <Link to={ROUTES.HOME}>HOMEへ戻る</Link>
    </PageWrapper>
  )
}

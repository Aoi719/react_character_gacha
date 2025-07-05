import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import CharacterList from "../components/CharacterList/CharacterList"
import PrimaryHeading from "../components/Heading/PrimaryHeading"

export default function MyPage({ ownedCharacters }) {
  return (
    <PageWrapper>
      <PrimaryHeading>所持キャラクター一覧</PrimaryHeading>
      {
        ownedCharacters.length === 0 ? (
          <p>まだキャラを持っていません。</p>
        ) : (
          <CharacterList ownedCharacters={ownedCharacters} />
        )
      }
      <Link to={ROUTES.HOME}>HOMEへ戻る</Link>
    </PageWrapper>
  )
}


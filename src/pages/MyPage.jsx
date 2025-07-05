import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import CharacterList from "../components/CharacterList/CharacterList"
import PrimaryHeading from "../components/Heading/PrimaryHeading"
import Button from "../components/Button/Button";
import ButtonList from "../components/Button/ButtonList";

export default function MyPage({ ownedCharacters }) {
  return (
    <PageWrapper>
      <PrimaryHeading>マイページ</PrimaryHeading>
      <h3>所持キャラクター一覧</h3>
      {
        ownedCharacters.length === 0 ? (
          <p>まだキャラを持っていません。</p>
        ) : (
          <CharacterList ownedCharacters={ownedCharacters} />
        )
      }
      <ButtonList>
        <Button to={ROUTES.GACHA} variant="danger">もう一度ガチャる！</Button>
        <Button to={ROUTES.HOME}>HOMEへ戻る</Button>
      </ButtonList>
    </PageWrapper>
  )
}


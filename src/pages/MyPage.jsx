import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import CharacterList from "../components/CharacterList/CharacterList"
import PrimaryHeading from "../components/Heading/PrimaryHeading"
import Button from "../components/Button/Button";
import ButtonList from "../components/Button/ButtonList";
import SecondaryHeading from "../components/Heading/SecondaryHeading"

export default function MyPage({ ownedCharacters }) {

  const filterByRarity = (rarity) => {
    return ownedCharacters.filter(chara => chara.rarity === rarity);
  }

  const RARITY_ORDER = ["SSR", "SR", "R", "N"];

  return (
    <PageWrapper>
      <PrimaryHeading>マイページ</PrimaryHeading>
      {
        ownedCharacters.length === 0 ? (
          <p>まだキャラを持っていません。</p>
        ) : (
          <>
            {RARITY_ORDER.map((rarity) => {
              const characters = filterByRarity(rarity);
              if (characters.length === 0) return null;

              return (
                <div key={`rarity-${rarity}`}>
                  <SecondaryHeading variant={rarity.toLowerCase()}>{rarity}</SecondaryHeading>
                  <CharacterList ownedCharacters={characters} />
                </div>
              )
            })}
          </>
        )
      }
      <ButtonList>
        <Button to={ROUTES.GACHA} variant="danger">遊んでみる</Button>
        <Button to={ROUTES.HOME}>HOMEへ戻る</Button>
      </ButtonList>
    </PageWrapper>
  )
}
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import GachaResult from "../components/GachaResult/GachaResult";
import PrimaryHeading from "../components/Heading/PrimaryHeading";

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
      <PrimaryHeading>ガチャ結果</PrimaryHeading>
      <GachaResult character={character} />
      <Link to={ROUTES.GACHA}>もう一度引く</Link>
      <br />
      <Link to={ROUTES.MYPAGE}>マイページへ</Link>
    </PageWrapper>
  )
}

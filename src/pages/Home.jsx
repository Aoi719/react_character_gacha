import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"

export default function Home() {
  return (
    <PageWrapper>
      <h1>Home</h1>
      <div>
        <Link to={ROUTES.GACHA}>ガチャを引く</Link>
      </div>
      <div>
        <Link to={ROUTES.MYPAGE}>マイページを見る</Link>
      </div>
    </PageWrapper>
  )
}


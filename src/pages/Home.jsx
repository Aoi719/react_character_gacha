import { Link } from "react-router-dom"
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import { useState, useEffect } from "react"
import styles from "./Home.module.css";

export default function Home() {
  const [showHeading, setShowHeading] = useState(false);
  const [showElemenets, setShowElemenets] = useState(false);

  useEffect(() => {
    const headingTimer = setTimeout(() => setShowHeading(true), 1000);
    const elementsTimer = setTimeout(() => setShowElemenets(true), 2000);
    return () => {
      clearTimeout(headingTimer)
      clearTimeout(elementsTimer)
    };
  }, [])

  return (
    <PageWrapper>
      <h1 className={showHeading ? styles.display : ""} id="homeHeading">
        <img src="logo.svg" alt="エレメンティア" />
      </h1>
      <div className={showElemenets ? styles.display : styles.hidden}>
        <Link to={ROUTES.GACHA}>ガチャを引く</Link>
      </div>
      <div className={showElemenets ? styles.display : styles.hidden}>
        <Link to={ROUTES.MYPAGE}>マイページを見る</Link>
      </div>
    </PageWrapper>
  )
}


import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import { useState, useEffect } from "react"
import styles from "./Home.module.css";
import Button from "../components/Button/Button";
import ButtonList from "../components/Button/ButtonList";
import Slider from "../components/Slider/Slider";

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
      <h1 className={`${styles.h1} ${showHeading ? styles.display : ""}`} id="homeHeading">
        <img src="logo.svg" alt="エレメンティア" />
      </h1>
      <div className={showElemenets ? styles.display : styles.hidden}>
        <div className={styles.imgSlider}>
          <Slider />
        </div>
        <ButtonList>
          <Button to={ROUTES.GACHA} variant="danger">ガチャを引く</Button>
          <Button to={ROUTES.MYPAGE}>マイページを見る</Button>
        </ButtonList>
        <div className={styles.caution}>
          <p>※ストレージ保存には対応していないため、リロードをするとデータが削除されます。</p>
        </div>
      </div>
    </PageWrapper>
  )
}

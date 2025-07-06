import { Link, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "../const"
import PageWrapper from "../components/PageWrapper/PageWrapper"
import GachaResult from "../components/GachaResult/GachaResult";
import PrimaryHeading from "../components/Heading/PrimaryHeading";
import Button from "../components/Button/Button";
import ButtonList from "../components/Button/ButtonList";
import Loading from "../components/Loading/Loading";
import { useReward } from 'react-rewards';

export default function Result() {
  const [active, setActive] = useState(false);
  const hasPlayed = useRef(false);
  const location = useLocation();
  const character = location.state?.character;
  const { reward } = useReward('rewardId', 'confetti', {
    angle: 90,
    spread: 270,
    decay: 0.95,
    elementCount: 300,
  });

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // レアリティがSRorSSRの時はクラッカー演出
  useEffect(() => {
    if (active && !hasPlayed.current && character && (character.rarity === "SR" || character.rarity === "SSR")) {
      reward();
      hasPlayed.current = true;
    }
  }, [active, character, reward]);

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
      <Loading active={active} />
      <span
        id="rewardId"
        style={{
          position: "fixed",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999, // 最前面に
          pointerEvents: "none", // クリック無効化
        }}
      />
      <PrimaryHeading>ガチャ結果</PrimaryHeading>
      <GachaResult character={character} />
      <ButtonList>
        <Button to={ROUTES.GACHA} variant="danger">もう一度ガチャる！</Button>
        <Button to={ROUTES.MYPAGE}>マイページへ</Button>
      </ButtonList>
    </PageWrapper>
  )
}

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import { useEffect, useRef } from 'react';

import characters from "../../data/character"

export default function Slider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.autoplay?.start();
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      loop={true}
      loopedSlides={10}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      modules={[Autoplay]}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        swiper.autoplay.stop();
      }}
      className="mySwiper"
    >
      {
        characters.map((chara, index) => (
          <SwiperSlide key={`slider-${index}`}>
            <img src={chara.image} alt={chara.name} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}


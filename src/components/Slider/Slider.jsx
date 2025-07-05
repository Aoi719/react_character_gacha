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
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      loopedSlides={10}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
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


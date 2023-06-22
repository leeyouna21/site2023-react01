import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/effect-coverflow";
import "swiper/css/bundle";

const YoutubeImg = ({ youtube }) => {
  return (
    <a
      href={`https://youtube.com/watch?v=${youtube.id.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={youtube.snippet.thumbnails.high.url} alt="유튜브 이미지" />
    </a>
  );
};

const youtubeSlider = ({ youtubes }) => {
  return (
    <div className="youtube__slider">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="3"
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
      >
        {youtubes.map((youtube, index) => (
          <SwiperSlide key={index}>
            <YoutubeImg youtube={youtube} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default youtubeSlider;

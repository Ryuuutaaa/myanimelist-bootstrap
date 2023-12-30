"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../app/public/styles/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MyCarousel = ({ api }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {api.data.map((anime) => (
        <SwiperSlide key={anime.mal_id}>
          <div className="position-relative overflow-hidden carousel-screen">
            <div className="position-absolute top-50 start-50 translate-middle carousel-title">
              <h1 className="text-white" style={{ fontSize: "2rem" }}>
                {anime.title}
              </h1>
            </div>
            <img
              src={anime.images.jpg.large_image_url}
              alt=""
              className="w-100 h-100 object-fit-cover carousel-img"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MyCarousel;

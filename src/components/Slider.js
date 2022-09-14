import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { Pagination, Navigation } from "swiper";
import axios from "axios";

function Slider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then(function (response) {
        // handle success
        setSlides(() => response.data);
        console.log(slides);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <Swiper
      navigation={true}
      pagination={{
        dynamicBullets: false,
      }}
      modules={[Pagination, Navigation]}
      className="home-slider"
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            <img className="img-fluid" src={slide.img} alt={slide.id} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
export default Slider;

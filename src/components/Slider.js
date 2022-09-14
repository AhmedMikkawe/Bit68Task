import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { useState, useEffect } from "react";
import { Pagination, Navigation, Autoplay, Lazy } from "swiper";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

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
    <div className="home-slider-container">
      <Container>
        <Row>
          <Col>
            <Swiper
              lazy={true}
              loop={true}
              autoplay={true}
              navigation={true}
              pagination={{
                dynamicBullets: false,
                clickable: true,
              }}
              modules={[Pagination, Navigation, Autoplay, Lazy]}
              className="home-slider"
            >
              {slides.map((slide) => {
                return (
                  <SwiperSlide key={slide.id}>
                    <img
                      className="img-fluid swiper-lazy"
                      data-src={slide.img}
                      alt={slide.id}
                    />
                    <div className="swiper-lazy-preloader"></div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Slider;

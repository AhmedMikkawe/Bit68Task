import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";
import { useState, useEffect, useRef, useCallback } from "react";
import { Pagination, Navigation, Autoplay, Lazy } from "swiper";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import ProductPreview from "./ProductPreview";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then(function (response) {
        // handle success
        setProducts(() => response.data);
        console.log(products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="fs-3 text-center mb-5">Explore Products</h2>
          </Col>
        </Row>
      </Container>
      <Container className="home-products-container">
        <Row>
          <Col>
            <Swiper
              ref={sliderRef}
              slidesPerView={2}
              spaceBetween={0}
              lazy={true}
              loop={true}
              autoplay={true}
              pagination={{
                el: ".pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return '<span class="' + className + '">' + "</span>";
                },
              }}
              modules={[Pagination, Navigation, Autoplay, Lazy]}
              className="products-slider"
              breakpoints={{
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
              }}
            >
              {products.map((product) => {
                return (
                  <SwiperSlide key={product.id}>
                    <ProductPreview product={product} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
              <div className="swiper-button-prev" onClick={handlePrev} />
              <div className="pagination" />
              <div className="swiper-button-next" onClick={handleNext} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Products;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Products from "./Products";
import StarRating from "./StarRating";
import Counter from "./Counter";
import shippingIcon from "../assets/shipping.png";
import freeReturnIcon from "../assets/return.png";
import ProductOption from "./ProductOption";
function Product() {
  const [products, setProducts] = useState([]);
  let inStock = false;
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then(function (response) {
        // handle success
        setProducts(() => response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const product = products.find((p) => p.id == id);
  if (product && product.inStock > 0) {
    inStock = true;
  } else {
    inStock = false;
  }
  console.log(products);
  console.log(product);
  return (
    <Container className="mb-5 mt-5">
      <Row>
        <Col lg={6}>
          <div className="product__images d-flex align-content-center gap-2">
            <div className="product__thumbs d-flex flex-column gap-2">
              {product
                ? product.img.map((im, index) => {
                    return (
                      <img src={im} key={index} className="product__thumb" />
                    );
                  })
                : ""}
            </div>
            <img
              src={product ? product.img[0] : ""}
              className="product__image"
            />
          </div>
        </Col>
        <Col lg={6}>
          <div className="product__info d-flex flex-column gap-2">
            <h1 className="fs-4">{product ? product.name : ""}</h1>
            <div className="d-flex gap-2 align-items-center">
              <StarRating numberOfStars={product ? product.numberOfStars : 0} />
              <span className="fs-6 text-muted">
                ({product ? product.numberOfReviews : 0} Reviews)
              </span>
            </div>
            <div className="d-flex flex-column">
              <h2 className={inStock ? "mb-0 price--instock" : "mb-0"}>
                ${product ? product.price : 1000}
              </h2>
              <span
                className={
                  inStock ? "product--instock fs-6" : "product--outstock fs-6"
                }
              >
                {inStock ? "in stock" : "out of stock"}
              </span>
            </div>
            <Counter />
            <div className="d-flex flex-column gap-2">
              <h6 className="mb-0">Memory</h6>
              <div className="d-flex gap-2 flex-wrap">
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                  checked={true}
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">128 GB</span>
                    <span>$999.00</span>
                  </div>
                </ProductOption>
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">256 GB</span>
                    <span>$999.00</span>
                  </div>
                </ProductOption>
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">512 GB</span>
                    <span>$999.00</span>
                  </div>
                </ProductOption>
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">1 TB</span>
                    <span>$999.00</span>
                  </div>
                </ProductOption>
              </div>
            </div>
            <div className="d-flex flex-column gap-2">
              <h6 className="mb-0">Insurance</h6>
              <div className="d-flex gap-2">
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">1 year</span>
                    <span>$99.00</span>
                  </div>
                </ProductOption>
                <ProductOption
                  id="product-option1"
                  name="product-option1"
                  value="option1"
                >
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="fw-bold">2 year</span>
                    <span>$159.00</span>
                  </div>
                </ProductOption>
              </div>
            </div>

            <div className="d-grid">
              <Button
                variant="dark"
                size="lg"
                className={inStock ? "add-to-cart--instock" : ""}
              >
                Add To Cart
              </Button>
            </div>
            <hr />
            <div className="d-flex gap-2">
              <img src={shippingIcon} height="20" width="20" />
              <p className="fs-6 text-muted">
                Free shipping, arrives by Tue, Nov 23
              </p>
            </div>
            <div className="d-flex gap-2">
              <img src={freeReturnIcon} height="20" width="20" />
              <p className="fs-6 text-muted">
                Free 10-day return window starts Dec 26th Details
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
    </Container>
  );
}
export default Product;

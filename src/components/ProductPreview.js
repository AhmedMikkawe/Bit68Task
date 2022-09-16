function ProductPreview(props) {
  return (
    <div className="product p-3">
      <img
        className="img-fluid swiper-lazy"
        src={props.product.img[0]}
        alt={props.product.name}
        width="220"
        height="220"
      />
      <h5 className="mb-3">{props.product.name}</h5>
      <div className="d-flex justify-content-between">
        <span className="product__price-after-discount fs-4">
          ${props.product.priceAfterdiscount}
        </span>
        <span className="product__price fs-4">${props.product.price}</span>
      </div>
      <p
        className={
          props.product.inStock > 0 ? "product--instock" : "product--outstock"
        }
      >
        {props.product.inStock > 0 ? "In stock" : "Out of stock"}
      </p>
    </div>
  );
}
export default ProductPreview;

import { useState } from "react";
function ProductOption(props) {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
  };
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div
      className={
        checked || props.checked ? "product__option checked" : "product__option"
      }
      onClick={handleClick}
    >
      <input
        type="radio"
        value={props.value}
        name={props.name}
        checked={props.checked != null ? props.checked : checked}
        onChange={handleChange}
        id={props.id}
      />
      {props.children}
    </div>
  );
}
export default ProductOption;

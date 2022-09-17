import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
function Counter() {
  const [counter, setCounter] = useState(1);
  return (
    <div className="d-flex gap-2">
      <button
        onClick={() => setCounter(counter + 1)}
        type="button"
        className="btn btn-outline-dark btn-circle btn-lg"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <span className="fs-4">{counter}</span>
      <button
        onClick={() => setCounter(counter - 1)}
        type="button"
        className="btn btn-outline-dark btn-circle btn-lg"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
    </div>
  );
}
export default Counter;

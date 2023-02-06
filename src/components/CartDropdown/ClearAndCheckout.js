import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCartItems, toggleCart } from "../../store/cart-slice";

import styles from "../ShopBody/HomeBody/ProductItem.module.css";

const ClearAndCheckout = () => {
  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearCartItems());
  };

  const closeCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <div className="flex w-full justify-around items-center mt-4">
      <div>
        <button onClick={clearCartHandler} className={`${styles.tooltip}`}>
          <FontAwesomeIcon
            icon={faTrash}
            className="py-2.5 px-3 rounded-3xl bg-red-600 text-white font-semibold text-xl ml-3"
          />
          <span className="absolute text-center bg-black/[0.8] py-1.5 w-32 text-xs invisible text-white rounded-sm ml-2 mt-1.5">
            Clear cart
          </span>
        </button>
      </div>
      <div>
        <button>
          <Link to="/checkout">
            <FontAwesomeIcon
              icon={faCheck}
              className="py-2.5 px-3 rounded-3xl bg-lime-600 text-white font-semibold text-xl ml-3"
              onClick={closeCartHandler}
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ClearAndCheckout;

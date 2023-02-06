import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faXmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  addItemToWishlist,
  reduceWishItemQuantity,
  removeItemFromWishlist,
} from "../../../store/wishlist-slice";
import { addItemToCart, toggleCart } from "../../../store/cart-slice";

const WishlistProductItem = (props) => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const euroIsActive = useSelector((state) => state.currency.isActive.euro);
  const cartIsShown = useSelector((state) => state.cart.cartIsShown);

  const removeItemFromWishHandler = () => {
    dispatch(removeItemFromWishlist(props.id));
  };

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        id: props.id,
        price: props.price,
        name: props.name,
        thumbnail: props.product,
      })
    );
    if (!cartIsShown) {
      dispatch(toggleCart());
    }
  };

  const increaseQuantityHandler = () => {
    dispatch(addItemToWishlist({ id: props.id }));
  };

  const reduceQuantityHandler = () => {
    dispatch(reduceWishItemQuantity(props.id));
  };

  return (
    <div>
      <ul className="flex w-4/5 text-black lg:items-center py-3 text-sm ">
        <div className="flex lg:w-3/4 sm:w-5/6 justify-between items-center">
          <li>
            <img
              src={props.product}
              className="w-20 sm:px-2 lg:px-1"
              alt={props.name}
            />
          </li>
          <li className="font-semibold">{props.name}</li>
          <li>
            <span>{selectedCurrency}</span>
            {!euroIsActive ? (
              <span>{props.price}</span>
            ) : (
              <span>{`${Math.floor(props.price * 0.92)}`}</span>
            )}
          </li>
          <li>{props.availability} left</li>
          <li className="flex items-center sm:mr-2 lg:px-1">
            <button onClick={reduceQuantityHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="lg:mx-3 sm:mx-2">{props.quantity}</span>
            <button onClick={increaseQuantityHandler}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
        </div>
        <div className="lg:ml-36 sm:ml-6 sm:mr-4 lg:mr-0">
          <li className="flex">
            <button>
              <FontAwesomeIcon
                icon={faXmark}
                className="py-1.5 px-2.5 rounded-3xl bg-red-500 text-white font-semibold text-xl ml-3"
                onClick={removeItemFromWishHandler}
              />
            </button>
            <button>
              <FontAwesomeIcon
                icon={faCartPlus}
                className="p-2 rounded-3xl bg-lime-600 text-white font-semibold text-lg ml-3"
                onClick={addItemToCartHandler}
              />
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default WishlistProductItem;

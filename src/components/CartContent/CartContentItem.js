import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

const CartContentItem = (props) => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const cartItems = useSelector((state) => state.cart.items);

  const existingItem = cartItems.find((item) => item.id === props.id);

  const euroIsActive = useSelector((state) => state.currency.isActive.euro);

  const removeItemFromCartHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };

  const increaseQuantityHandler = () => {
    dispatch(addItemToCart({ id: props.id }));
  };

  const reduceQuantityHandler = () => {
    dispatch(removeItemFromCart(props.id));
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
          <li className="flex items-center sm:mr-2 lg:px-1">
            <button onClick={reduceQuantityHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="mx-3">{props.quantity}</span>
            <button onClick={increaseQuantityHandler}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
          <li>
            <span>{selectedCurrency}</span>
            {!euroIsActive ? (
              <span>{existingItem.totalPrice}</span>
            ) : (
              <span>{`${Math.floor(existingItem.totalPrice * 0.92)}`}</span>
            )}
          </li>
        </div>
        <div className="lg:ml-40 sm:ml-20 sm:mr-4 lg:mr-0">
          <li>
            <button>
              <FontAwesomeIcon
                icon={faXmark}
                className="py-1.5 px-2.5 rounded-3xl bg-red-500 text-white font-semibold text-xl ml-3"
                onClick={removeItemFromCartHandler}
              />
            </button>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default CartContentItem;

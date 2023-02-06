import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const euroIsActive = useSelector((state) => state.currency.isActive.euro);

  const reduceItemQuantityHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };

  const increaseItemQuantityHandler = () => {
    dispatch(
      addItemToCart({
        id: props.id,
      })
    );
  };

  return (
    <div
      className="flex justify-between mb-2 border-b font-bold border-black/[0.2] pb-4 items-center text-sm"
      id={props.id}
    >
      <div className="w-3/5">
        <img
          src={props.thumbnail}
          className="w-full h-20 px-2"
          alt={`${props.name}`}
        />
      </div>
      <div className="flex-col mx-auto w-2/5">
        <div>
          <span className="">{props.name}</span>
        </div>
        <div>
          <span>
            <span>{selectedCurrency}</span>
            {!euroIsActive ? (
              <span>{props.price}</span>
            ) : (
              <span>{`${Math.floor(props.price * 0.92)}`}</span>
            )}
          </span>
        </div>
        <div className="flex justify-center items-center text-center box-border mt-1">
          <button onClick={reduceItemQuantityHandler}>
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="mr-1.5 text-red-800"
            />
          </button>
          <span>{props.quantity}</span>
          <button onClick={increaseItemQuantityHandler}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="ml-1.5 text-green-800"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

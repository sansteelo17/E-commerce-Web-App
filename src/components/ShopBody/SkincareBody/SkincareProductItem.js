import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart, toggleCart } from "../../../store/cart-slice";

import {
  addItemToWishlist,
  removeItemFromWishlist,
} from "../../../store/wishlist-slice";

import styles from "../HomeBody/ProductItem.module.css";

const SkincareProductItem = (props) => {
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const euroIsActive = useSelector((state) => state.currency.isActive.euro);

  const wishlistItems = useSelector((state) => state.wishlist.items);

  const existingWishItem = wishlistItems.find((item) => item.id === props.id);

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        id: props.id,
        price: props.price,
        name: props.name,
        thumbnail: props.thumbnail,
      })
    );
    dispatch(toggleCart());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleWishlistHandlerAndAddOrRemove = () => {
    if (!existingWishItem) {
      dispatch(
        addItemToWishlist({
          id: props.id,
          name: props.name,
          thumbnail: props.thumbnail,
          price: props.price,
          availability: props.stock,
        })
      );
    } else if (existingWishItem) {
      dispatch(removeItemFromWishlist(props.id));
    }
  };

  return (
    <div
      key={props.id}
      id={props.id}
      className="flex-col lg:w-1/4 sm:w-3/4 sm:px-8 md:px-12 lg:px-4 shadow-lg shadow-black/[0.1] md:mx-1 lg:mx-3 my-4 py-2 rounded-xl text-center border border-black/[0.1]"
    >
      <Link to={`/${props.id}`}>
        <div className="w-full">
          <img
            src={props.thumbnail}
            className="sm:h-64 lg:h-60 w-full sm:pt-6 lg:pt-3 pb-3"
            alt={`${props.name} thumbnail`}
          />
        </div>
        <div>
          <span className="text-xs font-bold text-black/[0.5]">
            {props.category.toUpperCase()}
          </span>
        </div>
        <div>
          <span className="font-bold text-black/[0.6]">{props.name}</span>
        </div>
        <div className="flex justify-between mt-4 px-2 border-b border-black/[0.1] pb-4">
          <span className="text-red-600 font-semibold">
            <span>{selectedCurrency}</span>
            {!euroIsActive ? (
              <span>{props.price}</span>
            ) : (
              <span>{`${Math.floor(props.price * 0.92)}`}</span>
            )}
          </span>
          <span className="font-semibold text-black/[0.5]">
            ({props.stock} left)
          </span>
        </div>
      </Link>
      <div className="flex w-3/4 justify-around mx-auto text-xl mt-4 mb-2 text-black/[0.6] font-bold">
        <button className={`${styles.tooltip} relative`}>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={toggleWishlistHandlerAndAddOrRemove}
            className={existingWishItem ? "text-red-500" : ""}
          />
          <span className="absolute text-center bg-black/[0.8] py-1.5 w-32 text-xs invisible text-white rounded-sm ml-2">
            {existingWishItem ? "Remove from wishlist" : "Add to wishlist"}
          </span>
        </button>
        <button onClick={addItemToCartHandler}>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
};

export default SkincareProductItem;

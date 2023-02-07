import { useDispatch, useSelector } from "react-redux";

import { toggleCart } from "../../../store/cart-slice";
import { addItemToCart } from "../../../store/cart-slice";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductBody = ({ productDetail }) => {
  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const euroIsActive = useSelector((state) => state.currency.isActive.euro);

  const dispatch = useDispatch();

  const addItemToCartHandler = () => {
    dispatch(
      addItemToCart({
        id: productDetail.id,
        price: productDetail.price,
        name: productDetail.name,
        thumbnail: productDetail.thumbnail,
      })
    );
    dispatch(toggleCart());
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full mt-20 lg:mt-14 px-1 font-semibold items-center">
      <div className="w-full lg:w-2/4">
        <img
          src={productDetail.thumbnail}
          alt={productDetail.title}
          className="h-72 w-full lg:w-11/12 px-8 py-4 lg:py-1"
        />
      </div>
      <div className="flex-col w-full lg:w-2/4 text-center px-8 py-6 lg:py-3 leading-4">
        <div>
          <span className="text-3xl">{productDetail.title}</span>
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold p-1 text-black/[0.5]">
            {`${productDetail.category.toUpperCase()}-${productDetail.brand}`}
          </span>
        </div>
        <div className="mt-2">
          <p className="text-xl">{productDetail.description}</p>
        </div>
        <div className="flex justify-around items-center mt-4 bg-black text-white py-3 text-xl rounded-xl">
          <div>
            <span className="text-lime-500">
              <span>{selectedCurrency}</span>
              {!euroIsActive ? (
                <span>{productDetail.price}</span>
              ) : (
                <span>{`${Math.floor(productDetail.price * 0.92)}`}</span>
              )}
            </span>
          </div>
          <div>
            <span>({productDetail.stock} left)</span>
          </div>
          <button onClick={addItemToCartHandler}>
            <FontAwesomeIcon
              icon={faCartPlus}
              className="text-lime-500 hover:text-lime-500/[0.8]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;

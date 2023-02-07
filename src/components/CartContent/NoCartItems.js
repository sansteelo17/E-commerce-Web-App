import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NoCartItems = () => {
  return (
    <div className="flex flex-col w-full items-center mt-10">
      <div className="mb-4 sm:mb-6">
        <FontAwesomeIcon
          icon={faCartShopping}
          className="text-lime-700 text-7xl sm:text-8xl py-2 pr-2"
        />
      </div>
      <div className="mb-4 sm:mb-6">
        <span className="block text-center font-bold text-2xl sm:text-4xl mb-2">
          Your cart has no items!
        </span>
        <p className="text-center text-xs sm:text-sm text-black/[0.5] font-medium">
          Find something you like, add it to your cart, then proceed to
          checkout.
        </p>
      </div>
      <div>
        <button className="bg-lime-700 text-white py-2 px-4 font-semibold rounded">
          <Link to="/">Return to shop</Link>
        </button>
      </div>
    </div>
  );
};

export default NoCartItems;

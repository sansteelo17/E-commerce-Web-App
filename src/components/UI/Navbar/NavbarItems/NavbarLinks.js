import {
  faBars,
  faCaretDown,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCurrDropdown } from "../../../../store/currency-slice";
import CurrDropdown from "./CurrDropdown";
import AccountDrop from "./AccountDrop";
import { toggleAuthDrop } from "../../../../store/auth-slice";

const NavbarLinks = (props) => {
  const dispatch = useDispatch();

  const currencyDropIsActive = useSelector(
    (state) => state.currency.isActive.currencyDropdown
  );

  const authDropIsActive = useSelector((state) => state.auth.authDropIsActive);

  const toggleCurrDropdownHandler = () => {
    dispatch(toggleCurrDropdown());
  };

  const toggleAuthHandler = () => {
    dispatch(toggleAuthDrop());
  };

  return (
    <nav className="flex w-full justify-between text-xs font-semibold border-b border-white/[0.2] max-h-7">
      <div className="lg:hidden hover:bg-slate-600/[0.2] px-4 py-1">
        <button onClick={props.onOpen}>
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>
      </div>
      <div className="px-4 py-1 hidden sm:block">
        <FontAwesomeIcon icon={faPhone} />
        <span className="ml-2">Hotline +2348109870865</span>
      </div>
      <div className="hidden lg:block py-1">
        <span>Welcome to our market!</span>
      </div>
      <div className="ml-8 sm:ml-0 py-1">
        <div className="mb-2 ">
          <button onClick={toggleCurrDropdownHandler}>
            <span className="mr-2">{props.selectedCurrency}</span>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
        {currencyDropIsActive && <CurrDropdown />}
      </div>
      <div className="hidden lg:block py-1">
        <Link to="/wishlist">
          <button>WISHLIST ({props.numOfWishlistItems})</button>
        </Link>
      </div>
      <div className="flex-col px-4 py-1 relative w-24 lg:w-36">
        <button onClick={toggleAuthHandler} className="pl-9 lg:pl-4">
          <FontAwesomeIcon icon={faUser} />
          <span className="ml-2 hidden lg:inline">ACCOUNT</span>
          <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
        </button>
        {authDropIsActive && <AccountDrop />}
      </div>
    </nav>
  );
};

export default NavbarLinks;

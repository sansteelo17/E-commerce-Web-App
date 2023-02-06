import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthDrop } from "../../../store/auth-slice";
import { disableCurrDropdown } from "../../../store/currency-slice";

import MainNavItems from "./NavbarItems/MainNavItems";
import NavbarLinks from "./NavbarItems/NavbarLinks";
import Sidebar from "./SIdebar/Sidebar";

const Navbar = () => {
  const dispatch = useDispatch();

  const [sidebarIsActive, setSidebarIsActive] = useState(false);

  const selectedCurrency = useSelector(
    (state) => state.currency.selectedCurrency
  );

  const numOfWishlistItems = useSelector(
    (state) => state.wishlist.totalQuantity
  );

  const authDropIsActive = useSelector((state) => state.auth.authDropIsActive);

  const closeModalHandler = () => {
    setSidebarIsActive(false);
  };

  const openModalHandler = () => {
    setSidebarIsActive(true);
  };

  const disableDropdownHandler = () => {
    dispatch(disableCurrDropdown());
    if (authDropIsActive) {
      dispatch(toggleAuthDrop());
    }
  };

  return (
    <div
      className="bg-lime-700 text-white w-full"
      onMouseLeave={disableDropdownHandler}
    >
      {sidebarIsActive && <Sidebar onClose={closeModalHandler} />}
      <NavbarLinks
        onOpen={openModalHandler}
        selectedCurrency={selectedCurrency}
        numOfWishlistItems={numOfWishlistItems}
      />
      <MainNavItems />
    </div>
  );
};

export default Navbar;

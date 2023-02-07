import { NavLink } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <div className="text-start">
      <h1 className="font-bold text-lg my-2 lg:my-4">USEFUL LINKS</h1>
      <ul className="flex flex-col text-white/[0.8]">
        <NavLink to="/" className="pb-2 sm:pb-1">
          Home
        </NavLink>
        <NavLink to="/contact" className="pb-2 sm:pb-1">
          Contact
        </NavLink>
        <NavLink to="/wishlist" className="pb-2 sm:pb-1">
          Wishlist
        </NavLink>
        <NavLink to="/checkout" className="pb-2 sm:pb-1">
          Checkout
        </NavLink>
      </ul>
    </div>
  );
};

export default UsefulLinks;

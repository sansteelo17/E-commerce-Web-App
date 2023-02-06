import { NavLink } from "react-router-dom";

const SidebarLinks = (props) => {
  return (
    <ul className="text-black font-semibold w-full text-2xl border-b border-black/[0.15]">
      <li className="py-4">
        <NavLink
          to="/"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          HOME
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink
          to="/men"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          MEN
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink
          to="/women"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          WOMEN
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink
          to="/furniture"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          FURNITURE
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink
          to="/skincare"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          SKINCARE
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink
          to="/contact"
          onClick={props.onClose}
          className={({ isActive }) => (isActive ? "activeLink" : null)}
        >
          CONTACT
        </NavLink>
      </li>
      <li className="py-4"></li>
    </ul>
  );
};

export default SidebarLinks;

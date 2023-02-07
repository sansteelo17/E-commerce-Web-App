import { NavLink } from "react-router-dom";

const CategoryNav = () => {
  return (
    <div className="max-w-full shadow-sm shadow-gray-900/[0.6] text-sm hidden lg:block">
      <ul className="flex w-3/5 mx-auto justify-around text-gray-900/[0.7] font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          HOME
        </NavLink>
        <NavLink
          to="/men"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          MEN
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          WOMEN
        </NavLink>
        <NavLink
          to="/furniture"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          FURNITURE
        </NavLink>
        <NavLink
          to="/skincare"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          SKINCARE
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "activeLink hover:bg-gray-900/[0.1] py-3 px-4"
              : "hover:bg-gray-900/[0.1] py-3 px-4"
          }
        >
          CONTACT
        </NavLink>
      </ul>
    </div>
  );
};

export default CategoryNav;

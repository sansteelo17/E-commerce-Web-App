import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Modal/Modal";
import modalClass from "../../Modal/Modal.module.css";
import SidebarLinks from "./SidebarLinks";

const Sidebar = (props) => {
  const totalNumOfWishItems = useSelector(
    (state) => state.wishlist.totalQuantity
  );

  return (
    <Fragment>
      <Modal onClose={props.onClose} />
      <div className={`${modalClass.modal} h-screen`}>
        <div className="flex justify-between items-center">
          <NavLink
            to="/wishlist"
            onClick={props.onClose}
            className={({ isActive }) =>
              isActive
                ? "activeLink text-black font-bold text-xs p-1 hover:border-b hover:border-lime-600/[0.5]"
                : "text-black font-bold text-xs p-1 hover:border-b hover:border-lime-600/[0.5]"
            }
          >
            WISHLIST({totalNumOfWishItems})
          </NavLink>
          <button>
            <FontAwesomeIcon
              icon={faXmark}
              fixedWidth
              className="text-red-500 bg-red-200/[0.3] text-lg p-2 border rounded-2xl"
              onClick={props.onClose}
            />
          </button>
        </div>

        <hr className="w-full m-2" />
        <SidebarLinks onClose={props.onClose} />
      </div>
    </Fragment>
  );
};

export default Sidebar;

import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../../store/auth-slice";

const AccountDrop = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="w-10/12 mt-1 lg:ml-2 flex flex-col sm:px-2 lg:px-0 absolute bg-white text-black text-center shadow shadow-black/[0.8]">
      {!isLoggedIn && (
        <Fragment>
          <div className="py-1 border-b border-black/[0.1] lg:hover:bg-slate-700/[0.2]">
            <Link to="/login" className="text-xs font-semibold">
              Login
            </Link>
          </div>
          <div className="py-1 border-b border-black/[0.1] lg:hover:bg-slate-700/[0.2]">
            <Link to="/signup" className="text-xs font-semibold">
              Sign up
            </Link>
          </div>
        </Fragment>
      )}
      {isLoggedIn && (
        <Fragment>
          <div className="py-1 border-b border-black/[0.1] lg:hover:bg-slate-700/[0.2]">
            <button className="text-xs font-semibold" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default AccountDrop;

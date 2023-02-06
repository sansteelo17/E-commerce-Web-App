import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeCurrency,
  disableCurrDropdown,
} from "../../../../store/currency-slice";

const CurrDropdown = () => {
  const euroIsActive = useSelector((state) => state.currency.isActive.euro);
  const dollarIsActive = useSelector((state) => state.currency.isActive.dollar);

  const dispatch = useDispatch();

  const setEuroIsActiveHandler = () => {
    dispatch(changeCurrency("€"));
    dispatch(disableCurrDropdown());
  };

  const setUsdIsActiveHandler = () => {
    dispatch(changeCurrency("$"));
    dispatch(disableCurrDropdown());
  };

  const USD_CASE = (
    <div className="relative">
      <ul className="bg-white text-black text-center absolute shadow shadow-black/[0.8]">
        <li className="py-1 px-4 border-b border-black/[0.1] hover:bg-slate-700/[0.2]">
          <button>USD</button>
        </li>
        <li className="py-1 px-4 border-b border-black/[0.1] hover:bg-slate-700/[0.2]">
          <button onClick={setEuroIsActiveHandler}>EUR</button>
        </li>
      </ul>
    </div>
  );

  const EUR_CASE = (
    <div className="relative">
      <ul className="bg-white text-black text-center absolute shadow shadow-black-700/[0.8]">
        <li className="py-1 px-4 border-b border-black/[0.1] hover:bg-slate-700/[0.2]">
          <button>EUR</button>
        </li>
        <li className="py-1 px-4 border-b border-black/[0.1] hover:bg-slate-700/[0.2]">
          <button onClick={setUsdIsActiveHandler}>USD</button>
        </li>
      </ul>
    </div>
  );

  return (
    <Fragment>
      {dollarIsActive && USD_CASE}
      {euroIsActive && EUR_CASE}
    </Fragment>
  );
};

export default CurrDropdown;

import { Fragment, useRef, useState } from "react";

import {
  faEnvelopesBulk,
  faKey,
  faPeopleGroup,
  faPerson,
  faPhone,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import { sendEmailToEmailjs } from "../lib/api";
import { useSelector } from "react-redux";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");
const isNumber = (value) => +value;

const CheckoutPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    enteredValue: firstNameValue,
    hasAnError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    enteredValue: lastNameValue,
    hasAnError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    enteredValue: numberValue,
    hasAnError: numberHasError,
    isValid: numberIsValid,
    valueChangeHandler: numberChangeHandler,
    blurHandler: numberBlurHandler,
    reset: resetNumber,
  } = useInput(isNumber);
  const {
    enteredValue: addressValue,
    hasAnError: addressHasError,
    isValid: addressIsValid,
    valueChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput(isNotEmpty);
  const {
    enteredValue: emailValue,
    hasAnError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    enteredValue: zipValue,
    hasAnError: zipHasError,
    isValid: zipIsValid,
    valueChangeHandler: zipChangeHandler,
    blurHandler: zipBlurHandler,
    reset: resetZip,
  } = useInput(isNumber);

  const cartItems = useSelector((state) => state.cart.items);

  const cartIsNotEmpty = cartItems.length > 0;

  const form = useRef();

  let formIsValid = false;

  if (
    emailIsValid &&
    zipIsValid &&
    addressIsValid &&
    firstNameIsValid &&
    lastNameIsValid &&
    numberIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      sendEmailToEmailjs(
        "service_iplkln5",
        "template_znbln96",
        form.current,
        "nev4bnxTq5iegO1na"
      );
    }

    setIsSubmitted(true);
    resetEmail();
    resetFirstName();
    resetLastName();
    resetNumber();
    resetZip();
    resetAddress();
  };

  return (
    <Fragment>
      {!isSubmitted && cartIsNotEmpty && (
        <form
          className="lg:w-2/4 sm:w-3/4 mx-auto p-4 mt-8 rounded-xl shadow-sm shadow-black/[0.3]"
          onSubmit={submitHandler}
          ref={form}
        >
          <div className="text-center">
            <span className="text-xl font-bold text-lime-600">
              LAST STEPS...
            </span>
          </div>
          <div className="flex flex-wrap justify-center my-8 relative">
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="firstname" className="absolute">
                <FontAwesomeIcon icon={faPerson} />
              </label>
              <input
                type="text"
                id="firstname"
                name="user_name"
                value={firstNameValue}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !firstNameHasError
                    ? "Enter your first name..."
                    : "Name can't be empty"
                }
              />
              {firstNameHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="lastname" className="absolute">
                <FontAwesomeIcon icon={faPeopleGroup} />
              </label>
              <input
                type="text"
                id="lastname"
                value={lastNameValue}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !lastNameHasError
                    ? "Enter your last name..."
                    : "Last name can't be empty"
                }
              />
              {lastNameHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="phone" className="absolute">
                <FontAwesomeIcon icon={faPhone} />
              </label>
              <input
                type="number"
                id="phone"
                value={numberValue}
                onChange={numberChangeHandler}
                onBlur={numberBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !numberHasError
                    ? "Enter your phone number..."
                    : "Enter a valid number"
                }
              />
              {numberHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="username" className="absolute">
                <FontAwesomeIcon icon={faUser} />
              </label>
              <input
                type="text"
                id="address"
                value={addressValue}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !addressHasError
                    ? "Enter your address..."
                    : "Address can't be empty"
                }
              />
              {addressHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="email" className="absolute">
                <FontAwesomeIcon icon={faEnvelopesBulk} />
              </label>
              <input
                type="email"
                id="email"
                value={emailValue}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !emailHasError ? "Enter your email..." : "Enter a valid email"
                }
              />
              {emailHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="mb-4 mr-4 flex items-center">
              <label htmlFor="password" className="absolute">
                <FontAwesomeIcon icon={faKey} />
              </label>
              <input
                type="number"
                id="zip"
                value={zipValue}
                onChange={zipChangeHandler}
                onBlur={zipBlurHandler}
                className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
                placeholder={
                  !zipHasError ? "Choose your zip..." : "zip must have six char"
                }
              />
              {zipHasError && (
                <FontAwesomeIcon icon={faWarning} className="text-red-600" />
              )}
            </div>
            <div className="text-center">
              <button
                disabled={!formIsValid}
                className="py-2 px-6 mt-2 bg-lime-600 text-white rounded hover:bg-lime-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
              >
                Place Order
              </button>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className="text-center mt-8 flex-col">
          <div>
            <span className="text-2xl font-bold text-lime-900">
              Order placed successfully!
            </span>
          </div>
          <div className="mt-6">
            <Link to="/" className="bg-lime-900 text-white py-2 px-6 rounded">
              Back to home
            </Link>
          </div>
        </div>
      )}
      {!cartIsNotEmpty && (
        <div className="text-center mt-8">
          <h1 className="text-red-600 text-2xl font-bold">
            ERROR! ADD ITEMS TO CART BEFORE PROCEEDING
          </h1>
        </div>
      )}
    </Fragment>
  );
};

export default CheckoutPage;

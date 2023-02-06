import { useState } from "react";

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
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isSixChar = (value) => value.trim().length > 6;
const isEmail = (value) => value.includes("@");
const isNumber = (value) => +value;

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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
    enteredValue: usernameValue,
    hasAnError: usernameHasError,
    isValid: usernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    blurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(isSixChar);
  const {
    enteredValue: emailValue,
    hasAnError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    enteredValue: passwordValue,
    hasAnError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isSixChar);

  let formIsValid = false;

  if (
    emailIsValid &&
    passwordIsValid &&
    usernameIsValid &&
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
      setIsLoading(true);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzXGpDX192HtV5fyKLJ_Y07miGRIVDJ50",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            firstname: firstNameValue,
            lastname: lastNameValue,
            phone: numberValue,
            username: usernameValue,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          navigate("/", { replace: true });
        } else {
          return res.json().then((data) => {
            let errorMsg;
            if (data && data.error.message) {
              errorMsg = data.error.message;
            } else {
              errorMsg = "Authentication failed!";
            }
            alert(errorMsg);
          });
        }
      });
    }

    resetEmail();
    resetFirstName();
    resetLastName();
    resetNumber();
    resetPassword();
    resetUsername();
  };

  return (
    <form
      className="lg:w-2/4 sm:w-3/4 mx-auto p-4 mt-8 rounded-xl shadow-sm shadow-black/[0.3]"
      onSubmit={submitHandler}
    >
      <div className="flex flex-wrap justify-center my-8 relative">
        <div className="mb-4 mr-4 flex items-center">
          <label htmlFor="firstname" className="absolute">
            <FontAwesomeIcon icon={faPerson} />
          </label>
          <input
            type="text"
            id="firstname"
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
            id="username"
            value={usernameValue}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
            className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
            placeholder={
              !usernameHasError
                ? "Enter a username..."
                : "Username must have six char"
            }
          />
          {usernameHasError && (
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
            type="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className="sm:w-80 lg:w-64 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
            placeholder={
              !passwordHasError
                ? "Choose your password..."
                : "Password must have six char"
            }
          />
          {passwordHasError && (
            <FontAwesomeIcon icon={faWarning} className="text-red-600" />
          )}
        </div>
      </div>
      <div className="text-center">
        {!isLoading && (
          <button
            disabled={!formIsValid}
            className="py-2 px-6 mt-2 bg-lime-600 text-white rounded hover:bg-lime-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Sign Up
          </button>
        )}
        {isLoading && (
          <p className="py-2 px-6 text-lime-600 mb-1">
            Creating your account...
          </p>
        )}
      </div>
    </form>
  );
};

export default SignupForm;

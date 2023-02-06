import { useState } from "react";

import {
  faEnvelopesBulk,
  faKey,
  faUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useInput from "../../hooks/use-input";
import { loginUser } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const isSixChar = (value) => value.trim().length > 6;
const isEmail = (value) => value.includes("@");

const LoginForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const {
    enteredValue: enteredUsername,
    valueChangeHandler: usernameInputHandler,
    blurHandler: usernameBlurHandler,
    reset: resetUsername,
    isValid: usernameIsValid,
    hasAnError: usernameHasError,
  } = useInput(isSixChar);
  const {
    enteredValue: enteredPassword,
    valueChangeHandler: passwordChangeHandler,
    blurHandler: passwordBlurHandler,
    reset: resetPassword,
    isValid: passwordIsValid,
    hasAnError: passwordHasError,
  } = useInput(isSixChar);
  const {
    enteredValue: enteredEmail,
    valueChangeHandler: emailInputHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
    isValid: emailIsValid,
    hasAnError: emailHasError,
  } = useInput(isEmail);

  let formIsValid = false;

  if (emailIsValid && usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    } else {
      setIsLoading(true);
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzXGpDX192HtV5fyKLJ_Y07miGRIVDJ50",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            username: enteredUsername,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMsg;
              if (data && data.error.message) {
                errorMsg = data.error.message;
              } else {
                errorMsg = "Authentication failed!";
              }
              throw new Error(errorMsg);
            });
          }
        })
        .then((data) => {
          dispatch(loginUser(data.idToken));
          navigate("/", { replace: true });
          console.log(data);
        })
        .catch((e) => alert(e.message));
    }

    resetUsername();
    resetPassword();
    resetEmail();
  };

  return (
    <form
      className="lg:w-2/5 sm:w-3/4 mx-auto p-4 mt-8 lg:rounded-lg sm:rounded-xl shadow-sm shadow-black/[0.3]"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col items-center my-8 relative">
        <div className="mb-4 flex items-center">
          <label htmlFor="username" className="absolute">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            type="text"
            id="username"
            className="sm:w-80 lg:w-96 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
            onChange={usernameInputHandler}
            onBlur={usernameBlurHandler}
            value={enteredUsername}
            placeholder={
              usernameHasError
                ? "Username must have six characters"
                : "Enter your username..."
            }
          />
          {usernameHasError && (
            <FontAwesomeIcon icon={faWarning} className="text-red-600" />
          )}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="absolute">
            <FontAwesomeIcon icon={faEnvelopesBulk} />
          </label>
          <input
            type="email"
            id="email"
            className="sm:w-80 lg:w-96 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
            value={enteredEmail}
            onChange={emailInputHandler}
            onBlur={emailBlurHandler}
            placeholder={
              !emailHasError ? "Enter your email..." : "Enter a valid email"
            }
          />
          {emailHasError && (
            <FontAwesomeIcon icon={faWarning} className="text-red-600" />
          )}
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="password" className="absolute">
            <FontAwesomeIcon icon={faKey} />
          </label>
          <input
            type="password"
            id="password"
            className="sm:w-80 lg:w-96 py-3 pl-7 pr-2 border-b border-black/[0.25] outline-none"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder={
              !passwordHasError
                ? "Enter your password..."
                : "Password must have six char"
            }
          />
          {passwordHasError && (
            <FontAwesomeIcon icon={faWarning} className="text-red-600" />
          )}
        </div>
        <div>
          {!isLoading && (
            <button
              disabled={!formIsValid}
              className="py-2 px-6 mt-2 bg-lime-600 text-white rounded hover:bg-lime-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Login
            </button>
          )}
          {isLoading && (
            <p className="py-2 px-6 text-lime-600 mb-1">Logging you in...</p>
          )}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

import { Fragment, useRef, useState } from "react";
import useInput from "../../hooks/use-input";
import { sendEmailToEmailjs } from "../../lib/api";
import { Link } from "react-router-dom";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const Contact = () => {
  const {
    enteredValue: firstName,
    valueChangeHandler: firstNameChangeHandler,
    blurHandler: firstNameBlurHandler,
    hasAnError: firstNameHasError,
    reset: resetFirstName,
    isValid: firstNameIsValid,
  } = useInput(isNotEmpty);
  const {
    enteredValue: lastName,
    valueChangeHandler: lastNameChangeHandler,
    blurHandler: lastNameBlurHandler,
    hasAnError: lastNameHasError,
    reset: resetLastName,
    isValid: lastNameIsValid,
  } = useInput(isNotEmpty);
  const {
    enteredValue: email,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    hasAnError: emailHasError,
    reset: resetEmail,
    isValid: emailIsValid,
  } = useInput(isEmail);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const formSubmitHandler = (e) => {
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
  };

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailNameClass = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      {!isSubmitted && (
        <form
          ref={form}
          onSubmit={formSubmitHandler}
          className="lg:w-2/5 sm:w-3/4 mx-auto p-4 mt-8 lg:rounded-lg sm:rounded-xl shadow-sm shadow-black/[0.3]"
        >
          <div className="text-center">
            <span className="text-xl font-bold text-lime-600">CONTACT US</span>
          </div>
          <div className="control-group">
            <div className={firstNameClass}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                value={firstName}
                onChange={firstNameChangeHandler}
                onBlur={firstNameBlurHandler}
              />
              {firstNameHasError && (
                <p className="error-text">First name must not be empty.</p>
              )}
            </div>
            <div className={lastNameClass}>
              <label htmlFor="name">Last Name</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={lastName}
                onChange={lastNameChangeHandler}
                onBlur={lastNameBlurHandler}
              />
              {lastNameHasError && (
                <p className="error-text">Last name must not be empty.</p>
              )}
            </div>
            <div className={`${emailNameClass} email`}>
              <label htmlFor="name">E-Mail Address</label>
              <input
                type="text"
                id="name"
                name="user_email"
                value={email}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
              />
              {emailHasError && (
                <p className="error-text">Enter a valid email.</p>
              )}
            </div>
            <div className="form-actions block">
              <button disabled={!formIsValid}>Submit</button>
            </div>
          </div>
        </form>
      )}
      {isSubmitted && (
        <div className="text-center mt-8 flex-col">
          <div>
            <span className="text-2xl font-bold text-lime-900">
              Success! You will hear from us soon!
            </span>
          </div>
          <div className="mt-6">
            <Link to="/" className="bg-lime-900 text-white py-2 px-6 rounded">
              Back to home
            </Link>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Contact;

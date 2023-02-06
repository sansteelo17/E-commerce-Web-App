import { useRef } from "react";
import useInput from "../../hooks/use-input";
import { sendEmailToEmailjs } from "../../lib/api";

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
    <form ref={form} onSubmit={formSubmitHandler}>
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
      </div>
      <div className={emailNameClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          name="user_email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default Contact;

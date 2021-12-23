import useInput from "./hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    blurChangeHanlder: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    blurChangeHanlder: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailValueHasError,
    valueChangeHandler: emailValueChangeHandler,
    blurChangeHanlder: emailValueBlurHandler,
    reset: emailValueReset,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let isFormValid = false;
  console.log(isFormValid);

  if (firstNameIsValid && lastNameIsValid && emailValueIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    firstNameReset();
    lastNameReset();
    emailValueReset();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailValueHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={(event) => {
              firstNameChangeHandler(event);
            }}
            onBlur={(event) => {
              firstNameBlurHandler(event);
            }}
          />
          {firstNameHasError && (
            <p className="error-text">Please Enter First Name</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={(event) => {
              lastNameChangeHandler(event);
            }}
            onBlur={(event) => {
              lastNameBlurHandler(event);
            }}
          />
          {lastNameHasError && (
            <p className="error-text">Please Enter Last Name</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={(event) => {
            emailValueChangeHandler(event);
          }}
          onBlur={(event) => {
            emailValueBlurHandler(event);
          }}
        />

        {emailValueHasError && (
          <p className="error-text">Please Enter Valid Email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

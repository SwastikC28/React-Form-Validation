import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  let formisValid = false;

  if (enteredNameIsValid) {
    formisValid = true;
    console.log(formisValid);
  }

  const onChangeHandler = (e) => {
    nameChangeHandler(e);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    resetNameInput();
  };

  const blurInputHandler = (e) => {
    nameBlurHandler(e);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={onChangeHandler}
          onBlur={blurInputHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be Empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

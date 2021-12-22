import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formisValid, setFormisValid] = useState(false);

  const enteredNameisValid = enteredName.trim() !== "";
  const nameInputisInvalid = !enteredNameisValid && enteredNameTouched;

  useEffect(() => {
    if (enteredNameisValid) {
      setFormisValid(true);
    } else {
      setFormisValid(false);
    }
  }, [enteredNameisValid]);

  const onChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const blurInputHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const nameInputClasses = nameInputisInvalid
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
        {nameInputisInvalid && (
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

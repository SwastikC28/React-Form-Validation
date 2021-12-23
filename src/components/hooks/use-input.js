import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const enteredValueHasError = !enteredValueIsValid && isTouched;

  console.log(enteredValueHasError);

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const blurChangeHanlder = (event) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError: enteredValueHasError,
    valueChangeHandler,
    blurChangeHanlder,
    reset,
  };
};

export default useInput;

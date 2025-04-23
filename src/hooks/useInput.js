import { useState } from "react";

export const useInput = (initialvalue = "") => {
  const [value, setValue] = useState(initialvalue);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const reset = () => setValue(initialvalue);
  const inputForm = {
    value,
    onChange: handleChange,
    reset,
    setValue,
  };
  return inputForm;
};

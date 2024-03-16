import { useState } from "react";

const useInput = (initialValue = "") => {
  const [inputData, setInputData] = useState(initialValue);

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  return {
    inputData,
    setInputData,
    handleInput,
  };
};

export default useInput;

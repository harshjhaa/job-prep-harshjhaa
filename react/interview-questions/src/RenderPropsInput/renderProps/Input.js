import React, { useState } from "react";

const Input = ({ renderProps }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <React.Fragment>
      <input placeholder="Enter here" onChange={handleInputChange} />
      <br />
      {renderProps(value)}
    </React.Fragment>
  );
};

export default Input;

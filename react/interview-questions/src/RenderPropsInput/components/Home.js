import React from "react";
import Input from "../renderProps/Input";

const Home = () => {
  const fahrenheitToCelcius = (f) => {
    if (f) return (f - 32) * (5 / 9);
  };

  const showInUpperCase = (value) => {
    return <h4 style={{ color: "red" }}>Value: {value.toUpperCase()}</h4>;
  };

  return (
    <div>
      <hr />
      <h2>Convert Fahrenhiet to Celcius</h2>
      <Input
        renderProps={(value) => {
          return <h4>Value in Celcius: {fahrenheitToCelcius(value)}</h4>;
        }}
      />
      <hr />
      <h2>Show everything in uppercase</h2>
      <Input renderProps={(value) => showInUpperCase(value)} />
      <hr />
    </div>
  );
};

export default Home;

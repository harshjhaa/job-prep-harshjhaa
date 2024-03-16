import React from "react";
import Rating from "../../commonComponents/Rating/Rating";

const Home = () => {
  return (
    <React.Fragment>
      <h1>Star Rating Application in React</h1>
      <Rating starCount={5} />
    </React.Fragment>
  );
};

export default Home;

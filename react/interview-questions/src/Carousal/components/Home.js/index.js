import React from "react";
import Carousal from "../../commonComponents/Carousal";
import imagesUrlArr from "../../utils/images_url.json";

const Home = () => {
  return (
    <div className="home-wrapper">
      <Carousal
        imagesArr={imagesUrlArr}
        infinite={true}
        auto={true}
        autoInterval={1000}
      />
    </div>
  );
};

export default Home;

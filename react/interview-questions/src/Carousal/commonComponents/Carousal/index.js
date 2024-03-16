import React, { useEffect, useState } from "react";
import "./index.css";
import Button from "../Button/Button";

const Carousal = ({
  imagesArr = [],
  infinite = false,
  auto = false,
  autoInterval = 2000,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (auto) {
      timer = setTimeout(() => {
        handleBtnClicked("next");
      }, autoInterval);
    }
    return () => {
      auto && clearTimeout(timer);
    };
  }, [activeImageIndex]);

  const handleBtnClicked = (type) => {
    if (type === "prev") {
      setActiveImageIndex(
        infinite && activeImageIndex === 0
          ? imagesArr.length - 1
          : (prev) => prev - 1
      );
    } else {
      setActiveImageIndex(
        infinite && activeImageIndex === imagesArr.length - 1
          ? 0
          : (prev) => prev + 1
      );
    }
  };

  return (
    <div className="carousal-wrapper">
      {imagesArr?.length > 0 ? (
        <>
          <Button
            text={"Prev"}
            onClick={() => handleBtnClicked("prev")}
            disabled={activeImageIndex === 0 && !infinite ? true : false}
          />
          {imagesArr.map((img, index) => {
            return (
              <img
                key={img.id || index}
                className={`img ${
                  activeImageIndex === index ? "" : "display-none"
                }`}
                src={img.url}
                alt="img"
              />
            );
          })}
          <Button
            text={"Next"}
            onClick={() => handleBtnClicked("next")}
            disabled={
              activeImageIndex === imagesArr.length - 1 && !infinite
                ? true
                : false
            }
          />
        </>
      ) : (
        <h3>Please Provide Images URL Array</h3>
      )}
    </div>
  );
};

export default Carousal;

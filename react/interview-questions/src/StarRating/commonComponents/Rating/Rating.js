import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

const Rating = ({ starCount }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const getColor = (index) => {
    return index <= hover ? "orange" : index <= rating ? "orange" : "#e4e4e4";
  };

  const handleButtonClick = (e) => {
    const button = e.target.closest("button");
    if (button) {
      const index = parseInt(button.getAttribute("data-index"));
      setRating(index);
    }
  };

  // useEffect(()=>{
  //   console.log("Mount")
  //   return()=>{
  //     console.log("cleanup")
  //   }
  // },[rating])

  // let [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log("ue: ", count);
  // }, [count]);
  // const handleIncrementCount = () => {
  //   count++;
  //   console.log("count++: ", count);
  // };
  // const handleIncrementSetCount = () => {
  //   setCount(count + 1); //this will create a new object of count will new refernce with incremented value
  //   // setCount((prev) => prev + 1);
  //   setTimeout(() => {
  //     console.log("setCount: ", count); //this will have the refernce to the old obj of count, so still it'll show the old data
  //   }, 1000);
  // };

  return (
    <div
      className="star-wrapper"
      onClick={handleButtonClick}
      aria-label="Star rating"
    >
      {new Array(starCount).fill(0).map((_, index) => {
        return (
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            key={"star" + index}
            data-index={index + 1}
          >
            <FaStar
              size={50}
              color={getColor(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
            />
          </button>
        );
      })}
      {/* <button onClick={handleIncrementCount}>count++ - {count}</button>
      <button onClick={handleIncrementSetCount}>setCount - {count}</button> */}
    </div>
  );
};

export default Rating;

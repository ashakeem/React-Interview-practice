import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ numStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleMouseEnter(currentIndex) {
    console.log(currentIndex);
    setHover(currentIndex);
  }

  function handleClick(currentIndex) {
    console.log(currentIndex);
    setRating(currentIndex);
  }

  function handleLeave() {
    setHover(rating);
  }

  return (
    <div className="starRating">
      {[...Array(numStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseLeave={() => handleLeave()}
            onMouseMove={() => handleMouseEnter(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

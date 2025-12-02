
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Ratings = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <AiFillStar
          key={i}
          size={20}
          color="#f6b100"
          className="mr-2"
        />
      );
    } else if (i === Math.floor(rating) + 1 && rating % 1 >= 0.25 && rating % 1 < 0.75) {
      // Half star for fractional ratings (0.25–0.75)
      stars.push(
        <BsStarHalf
          key={i}
          size={20}
          color="#f6b100"
          className="mr-2"
        />
      );
    } else {
      // Empty star
      stars.push(
        <AiOutlineStar
          key={i}
          size={20}
          color="#f6b100"
          className="mr-2"
        />
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

export default Ratings;

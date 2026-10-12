import React, { useId } from "react";

const Rating = ({className , rating = 0 }) => {
  const ratingId = useId();

  return (
    <div className={`rating rating-lg rating-half ${className}`}>
      <input type="radio" className="rating-hidden" />

      {Array.from({ length: 10 }, (_, index) => {
        const value = (index + 1) / 2;

        return (
          <input
            key={value}
            type="radio"
            name={ratingId}
            className={`mask mask-star-2 ${
              index % 2 === 0 ? "mask-half-1" : "mask-half-2"
            } bg-orange-400`}
            aria-label={`${value} star`}
            checked={rating === value}
            readOnly
          />
        );
      })}
    </div>
  );
};

export default Rating;
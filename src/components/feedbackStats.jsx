import React from "react";
import propTypes from "prop-types";

function FeedbackStats({ feedback }) {
  const average =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  average.toFixed(1).replace(/\.0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStats;

import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <div>No feedback yet!</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </div>
  );
}

export default FeedbackList;

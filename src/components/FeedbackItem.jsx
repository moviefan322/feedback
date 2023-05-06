import { useState } from "react";
import propTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className="close">
          <FaTimes color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
  handleDelete: propTypes.func.isRequired,
};

export default FeedbackItem;

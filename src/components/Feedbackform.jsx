import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function Feedbackform() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service?</h2>

        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
            value="text"
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
}

export default Feedbackform;

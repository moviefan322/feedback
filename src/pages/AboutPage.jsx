import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a react app to leave feedback for a service</p>
      <p>Version: 1.0.0</p>

      <Link to="/">Go Back</Link>
    </div>
  );
}

export default AboutPage;

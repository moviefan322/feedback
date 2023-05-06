import React from "react";

function Header() {
  const headerStyles = {
    background: "#333",
    color: "pink",
    textAlign: "center",
    padding: "10px",
    margin: "auto",
  };

  return (
    <header className="header" style={headerStyles}>
      <div>
        <div className="container">
          <h2>Feedback UI</h2>
        </div>
      </div>
    </header>
  );
}

export default Header;

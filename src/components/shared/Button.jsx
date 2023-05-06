import React from "react";
import propTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <div type={type} disabled={isDisabled} className={`btn-${version}`}>
      {children}
    </div>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  version: propTypes.string,
  type: propTypes.string,
  isDisabled: propTypes.bool,
};

export default Button;

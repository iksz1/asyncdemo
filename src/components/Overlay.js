import React from "react";
import PropTypes from "prop-types";

const Overlay = ({ result, onAction }) => {
  return (
    <div className="overlay-outer">
      <div className="overlay-inner">
        <h1>Result: {result}</h1>
        <button onClick={onAction}>Close</button>
      </div>
    </div>
  );
};

Overlay.propTypes = {
  result: PropTypes.number.isRequired,
  onAction: PropTypes.func.isRequired,
};

export default Overlay;

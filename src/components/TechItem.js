import React from "react";
import PropTypes from "prop-types";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={onDelete}>
        Remove
      </button>
    </li>
  );
}

// Default value for TechItem
TechItem.defaultProps = {
  tech: "Oculto"
};

// Properties types
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;

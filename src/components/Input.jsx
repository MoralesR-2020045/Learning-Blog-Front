import React from "react";
import PropTypes from "prop-types";

export const Input = ({ value, onChange, send }) => {
  return (
    <div >
      <input
        type="text"
        placeholder="Tu nombre"
        value={value}
        onChange={onChange}
        className="comment-author"
      />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};
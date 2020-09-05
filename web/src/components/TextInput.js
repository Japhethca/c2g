import React from "react";
import PropTypes from "prop-types";

export default function TextInput(props) {
  return (
    <div className={props.wrapperClass}>
      <label htmlFor={props.name}>{props.labelName}: </label>
      <input
        className={props.inputClassName}
        type="text"
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

TextInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

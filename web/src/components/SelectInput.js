import React from "react";
import PropTypes from "prop-types";

export default function SelectInput({
  options,
  wrapperClassName,
  onChange,
  selectClassName,
}) {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={name}>{labelName}</label>
      <select name={name} id="" onChange={onChange} className={selectClassName}>
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.objectOf({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  wrapperClassName: PropTypes.string,
  selectClassName: PropTypes.string,
};

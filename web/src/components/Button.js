import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
  return <button className={props.className}>{props.name}</button>;
}

Button.propTypes = {
  className: Proptypes.string,
  name: PropTypes.string.isRequired,
};

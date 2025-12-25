import React from "react";
import PropTypes from "prop-types";
import "../../static/css/main.scss";

const GlassCard = ({ children, className, hoverEffect, ...props }) => {
  return (
    <div
      className={`glass-card ${className || ""} ${
        hoverEffect ? "hover-effect" : ""
      }`}
      style={props.style}
      {...props}
    >
      {children}
    </div>
  );
};

GlassCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hoverEffect: PropTypes.bool,
  style: PropTypes.object,
};

GlassCard.defaultProps = {
  className: "",
  hoverEffect: false,
  style: {},
};

export default GlassCard;

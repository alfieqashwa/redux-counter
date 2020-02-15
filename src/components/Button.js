import React from "react";
import { useSelector } from "react-redux";

export default ({ children, disabled, onClick }) => (
  <button type="button" disabled={disabled} onClick={onClick}>
    {children}
  </button>
);

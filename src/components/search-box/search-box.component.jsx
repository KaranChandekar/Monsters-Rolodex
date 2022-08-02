import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="seach"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

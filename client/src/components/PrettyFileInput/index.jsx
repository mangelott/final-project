import React from "react";
import "./style.scss";

export default props => {
  const { id, value, ...otherProps } = props;
  return (
    <div className="input--pretty">
      <label htmlFor={id} className="input__trigger">
        {(!value && <span>Select File</span>) || (
          <span>Selected: {value.name}</span>
        )}
      </label>
      <input type="file" id={id} {...otherProps} />
    </div>
  );
};

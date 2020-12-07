import React from "react";
import handleChange from "../App";

const InputMaker = (props) => {
  return (
    <input
      type={props.type}
      class="form-control"
      id={props.id}
      onChange={handleChange}
      name={props.name}
      value={props.value}
      required
    ></input>
  );
};

export default InputMaker;

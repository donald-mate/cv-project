import React from "react";
import uniqid from "uniqid";

const BasicMap = (props) => {
  const { basic } = props;

  return (
    <ul>
      {basic.map((item) => {
        return <li key={uniqid()}>{item}</li>;
      })}
    </ul>
  );
};

export default BasicMap;

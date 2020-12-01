import React from "react";
import uniqid from "uniqid";

const EduMap = (props) => {
  const { education } = props;

  return (
    <ul>
      {education.map((item) => {
        return <li key={uniqid()}>{item}</li>;
      })}
    </ul>
  );
};

export default EduMap;

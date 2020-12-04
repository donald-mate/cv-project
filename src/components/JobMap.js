import React from "react";
import uniqid from "uniqid";

const JobMap = (props) => {
  const { job } = props;

  return (
    <ul>
      {job.map((item) => {
        return <li key={uniqid()}>{item}</li>;
      })}
    </ul>
  );
};

export default JobMap;

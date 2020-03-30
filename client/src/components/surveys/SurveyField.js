import React from "react";

export default ({ input, label, ...props }) => {
  console.log("props :", props);

  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...input} />
    </div>
  );
};

import React from "react";

const Button = (props) => {
  const { btnName, onClick } = props;
  return (
    <>
      <button onClick={onClick}>{btnName}</button>
    </>
  );
};
export default Button;

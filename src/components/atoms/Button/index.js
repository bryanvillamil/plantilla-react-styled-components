import React from "react";
import { ButtonCustom } from './styledComponents'

const Button = (props) => {
  const { onClick, children, type, className, tag } = props;
  return (
    <ButtonCustom
      className={"a__button " + (className || "") + (tag || "")}
      type={type}
      onClick={onClick}
    >
      {children}
    </ButtonCustom>
  );
};

export default Button;

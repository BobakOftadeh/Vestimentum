import React from "react";
import { ButtonStyle } from "./style";

interface ButtonProps {
  children?: React.ReactNode;
  href: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <ButtonStyle href={props.href}>{props.children}</ButtonStyle>;
};

export default Button;

import React from "react";
import { Button, Colors as CustomButtonColors } from "react-foundation";

import { CustomButtonProps } from "../types";

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  expanded,
  handleClick
}) => (
  <Button
    className={`${expanded ? "expanded" : ""}`}
    color={color}
    onClick={handleClick}
  >
    {children}
  </Button>
);

export { CustomButtonColors };
export default CustomButton;

import React from "react";
import { Button, Colors as CustomButtonColors } from "react-foundation";

interface CustomButtonProps {
  color: "primary" | "secondary" | "success" | "alert" | "warning" | undefined;
  expanded?: boolean;
  handleClick?: () => void;
}

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

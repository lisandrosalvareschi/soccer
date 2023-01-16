import React from "react";
import {FC, useMemo} from "react";

const Button: FC<{
  type?: "submit" | "reset" | "button",
  className?: string,
  disabled?: boolean,
  onClick?: () => void,
  variant?: "primary" | "black" | "white" | "green" | "yellow" | "magenta" | "yellowUA",
  size?: "normal" | "small",
  custom?: boolean,
  children: any
}> = ({
  children,
  type,
  className = "",
  disabled = false,
  onClick,
  variant = "primary",
  size = "normal",
  custom = false,
}) => {
  const textColor = useMemo(() => {
    let color = ""
    if (variant !== "white") {
      color = "white";
    }
    if (variant === "yellowUA") {
      color = "blueUA";
    }
    return color;
  }, [variant]);


  return custom ? (
    <button
      type={type}
      className={`
        select-none
        bg-${variant}-500 active:bg-${variant}-600
        ${textColor !== "" ? `text-${textColor}` : ""}
        shadow hover:shadow-lg outline-none
        focus:ring hover:ring ring-${variant}-100
        ease-linear transition-all duration-150
        ${disabled ? `opacity-50 cursor-not-allowed` : ``}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <button
      type={type}
      className={`
        select-none rounded-10px
        text-14px leading-21px font-bold
        bg-${variant}-500 active:bg-${variant}-600
        ${textColor !== "" ? `text-${textColor}` : ""}
        ${size === "small" ? "px-30px" : "px-40px"}
        min-h-46px
        shadow hover:shadow-lg outline-none
        focus:ring hover:ring ring-${variant}-100
        ease-linear transition-all duration-150
        ${disabled ? `opacity-50 cursor-not-allowed` : ``}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>);
}


export default Button;
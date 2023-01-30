import React from "react";
import { FC, ReactNode, useRef } from "react";

const Input: FC<{
  type?: string,
  disabled?: boolean,
  className?: string,
  value?: string,
  placeholder?: string,
  onChange?: (value: string) => void,
  multiline?: boolean,
  rows?: number,
  maxLength?: number,
  prefix?: ReactNode,
  suffix?: ReactNode,
  autoComplete?: string,
  inputClassName?: string,
  onFocus?: () => void,
  style?: any,
  onBlur?: () => void,
}> = ({
  disabled,
  className = "",
  value,
  style,
  placeholder,
  onChange = () => {},
  multiline = false,
  rows = 4,
  maxLength,
  type = "text",
  prefix,
  suffix,
  autoComplete,
  inputClassName = "",
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  if (multiline) {
    return (
      <textarea
        className={`appearance-none border rounded-10px py-10px px-10px w-full leading-24px focus:outline-none ${disabled ? "bg-gray-200 cursor-not-allowed" : ""} ${className}`}
        placeholder={placeholder}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        disabled={disabled}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }

  const handleContainerClick = (e) => {
    if (e.target === inputRef.current) {
      inputRef.current?.focus();
    }
  }

  return (
    <div
      className={`w-full flex flex-wrap  relative min-h-46px bg-white items-center rounded-10px border ${disabled ? "bg-gray-200" : ""} ${className}`}
      onClick={handleContainerClick}
    >
      {prefix && (
        <div className="flex items-center justify-center pr-6px">
          {prefix}
        </div>
      )}
      <input
        ref={inputRef}
        type={type}
        autoComplete={autoComplete}
        className={`
          flex-shrink flex-grow  leading-normal w-px flex-1 border-0 ${prefix ? "pr-20px pl-10px": "px-20px"}  relative self-center outline-none
          ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
          ${inputClassName}
        `}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        maxLength={maxLength}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {suffix && (
        <div className="flex items-center justify-center pl-3px">
          {suffix}
        </div>
      )}
    </div>
  );
};

export default Input;

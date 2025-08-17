import React, { useState, useId } from "react";
import { Eye, EyeOff, X, Loader2 } from "lucide-react";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: "text" | "password";
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  type = "text",
  variant = "outlined",
  size = "md",
  clearable = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = useId();

  const baseStyles =
    "peer w-full rounded-lg border px-3 pt-5 pb-2 transition focus:outline-none placeholder-transparent";

  const variantStyles = {
    filled: "bg-gray-100 dark:bg-gray-800 border-transparent focus:ring-2 focus:ring-blue-500",
    outlined: "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500",
    ghost: "border-transparent bg-transparent focus:ring-2 focus:ring-blue-500",
  };

  const sizeStyles = {
    sm: "text-sm h-9",
    md: "text-base h-11",
    lg: "text-lg h-13",
  };

  const inputType = type === "password" && !showPassword ? "password" : "text";

  return (
    <div className="flex flex-col w-full max-w-md">
      <div className="relative">
        <input
          id={inputId}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder || label}
          disabled={disabled || loading}
          className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${
            invalid ? "border-red-500 focus:ring-red-500" : ""
          } ${disabled ? "bg-gray-200 cursor-not-allowed dark:bg-gray-700" : ""}`}
          aria-invalid={invalid}
          aria-describedby={helperText ? `${inputId}-help` : invalid ? `${inputId}-error` : undefined}
        />

        {/* Floating Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="absolute left-3 top-2.5 text-gray-500 dark:text-gray-400 text-sm transition-all 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
            peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
            peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-600"
          >
            {label}
          </label>
        )}

        {/* Clear Button */}
        {clearable && value && !disabled && !loading && (
          <button
            type="button"
            className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
            }}
          >
            <X size={16} />
          </button>
        )}

        {/* Password Toggle */}
        {type === "password" && !loading && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <Loader2 size={18} className="animate-spin text-blue-500" />
          </div>
        )}
      </div>

      {/* Helper & Error Text */}
      {helperText && !invalid && (
        <span id={`${inputId}-help`} className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {helperText}
        </span>
      )}
      {invalid && errorMessage && (
        <span id={`${inputId}-error`} className="text-sm text-red-500 mt-1">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default InputField;
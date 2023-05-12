import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string;
  children?: React.ReactNode;
}

const TextBox = React.forwardRef<HTMLInputElement, IProps>(
  ({ className, children, labelText, type = "text", error, ...props }, ref) => {
    return (
      <div className={className + " relative"}>
        <div className="flex items-stretch">
          <input
            id="txt"
            autoComplete="off"
            className={`pl-2 outline-none border-none
             `}
            {...props}
            ref={ref}
            type={type}
            placeholder={labelText}
          ></input>

          <div className="flex">{children}</div>
        </div>
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
      </div>
    );
  }
);

TextBox.displayName = "TextBox";
export default TextBox;

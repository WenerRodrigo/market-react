import React from "react";

const Button = ({
  onClick,
  title,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="box-button" onClick={onClick} {...props}>
      {title || children}
    </button>
  );
};

export default Button;

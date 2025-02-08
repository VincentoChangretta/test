import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <button className={`button ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

import { FC } from "react";

interface ButtonProps {
  children: string;
  className?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

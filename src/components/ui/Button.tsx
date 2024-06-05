import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, children }) => {
  return (
    <button className="custom-btn group px-4 gap-x-2 p-2 lg:py-3 lg:px-6  md:h-[46px] border rounded-[3px] text-sm font-medium">
      <span className="group-hover:text-white duration-300">{text}</span>
      <span className="-rotate-45 group-hover:rotate-0 duration-300">
        {children}
      </span>
    </button>
  );
};

export default Button;

import { cn } from "@/services/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      className={cn(
        "bg-white rounded-lg text-black min-w-28 shadow-2xl shadow-white p-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

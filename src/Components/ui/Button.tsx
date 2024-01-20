import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../utils/cn";

type TVariant = "solid" | "outline" | "ghost";

type TRef = HTMLButtonElement;

type ButtonOptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ className, variant, children, ...rest }, ref) => {
    const getVariant = (variant?: TVariant) => {
      switch (variant) {
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn";
      }
    };
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(
          getVariant(variant),

          className
        )}
      >
        {children}
      </button>
    );
  }
);
export default Button;

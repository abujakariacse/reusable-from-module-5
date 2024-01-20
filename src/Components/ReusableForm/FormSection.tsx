import { useContext } from "react";
import { FormElementContext } from ".";
import cn from "../../utils/cn";

export const FormSection = ({ children }) => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn("w-full grid grid-cols-1 gap-5 justify-items-center ", {
        "md:grid-cols-2": double,
      })}
    >
      {children}
    </div>
  );
};

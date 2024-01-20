import { useContext } from "react";
import { FormElementContext } from ".";
import Button from "../ui/Button";
import cn from "../../utils/cn";

export const FormSubmit = () => {
  const { double } = useContext(FormElementContext);
  return (
    <div
      className={cn(" grid grid-cols-1 gap-5 justify-items-center py-6", {
        "md:grid-cols-2 col-start-2": double,
      })}
    >
      <div className=" w-full max-w-md col-start:1 md:col-start-2 flex justify-end">
        <Button className="w-full md:w-fit" type="submit" variant="solid">
          Submit
        </Button>
      </div>
    </div>
  );
};

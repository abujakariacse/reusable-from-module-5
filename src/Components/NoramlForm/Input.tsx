import { useFormContext } from "react-hook-form";

const Input = () => {
  const { register } = useFormContext();
  return (
    <div className="w-full max-w-md ">
      <label htmlFor="name" className="block">
        Test
      </label>
      <input type="text" id="name" className="" {...register("test")} />
    </div>
  );
};

export default Input;

import { FieldValues, FormProvider, useForm } from "react-hook-form";
import Container from "../ui/Container";
import cn from "../../utils/cn";
import Button from "../ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signUpSchema } from "./validation";
import Input from "./Input";

const NormalForm = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const methods = useForm<TNormalForm>({ resolver: zodResolver(signUpSchema) });
  const double = true;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  console.log(watch("name"));

  return (
    <Container>
      <h1 className="text-center">Form</h1>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={cn(
            "border border-gray-300 rounded shadow-sm p-5 mx-auto w-full",
            {
              "max-w-5xl": double,
              "max-w-md": !double,
            }
          )}
        >
          <div
            className={cn(
              "w-full grid grid-cols-1 gap-5 justify-items-center ",
              {
                "md:grid-cols-2": double,
              }
            )}
          >
            <div className="w-full max-w-md ">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input type="text" id="name" className="" {...register("name")} />
              {errors.name && (
                <span className="text-xs text-red-500">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="w-full  max-w-md">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="w-full  max-w-md">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input type="password" id="password" {...register("password")} />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="w-full  max-w-md">
              <Input />
            </div>
            {/* <div className="w-full  max-w-md">
            <label htmlFor="name" className="block">
              Gender
            </label>
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Rather not to say</option>
            </select>
          </div> */}
            {/* <div className="w-full  max-w-md">
            <label htmlFor="name" className="block">
              About Yourself
            </label>
            <textarea></textarea>
          </div> */}
            {/* <div className="w-full  max-w-md">
            <label htmlFor="name" className="block">
              Favorite Colors
            </label>

            <label htmlFor="red" className="select-none">
              <input id="red" name="red" type="checkbox" className="" />
              Red
            </label>
          </div> */}
          </div>
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
        </form>
      </FormProvider>
    </Container>
  );
};

export default NormalForm;

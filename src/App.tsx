import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormSection,
  FormSubmit,
  Input,
} from "./Components/ReusableForm";
import Container from "./Components/ui/Container";

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const double = true;
  return (
    <div>
      <Container>
        <Form
          onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}
          double={double}
        >
          <FormSection>
            <Input
              type="text"
              label={"Name"}
              register={register("name")}
              errors={errors}
            />
            <Input
              type="email"
              label={"Email"}
              register={register("email")}
              errors={errors}
            />
          </FormSection>
          <FormSubmit></FormSubmit>
        </Form>
      </Container>
    </div>
  );
};

export default App;

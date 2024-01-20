import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(8, "Password is too short"),
});

export type TNormalForm = z.infer<typeof signUpSchema>;

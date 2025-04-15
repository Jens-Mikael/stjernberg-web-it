import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Email is invalid" }),
  phone: z
    .string()
    .min(1, "Phone is required")
    .regex(/^\+\d{5,15}$/, "Phone must start with + and contain 5-15 numbers"),
  message: z.string().min(1, "Message is required"),
});

export type TContactSchema = z.infer<typeof contactSchema>;

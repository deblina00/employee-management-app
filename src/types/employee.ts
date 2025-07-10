
import { z } from "zod";

export const employeeRoles = ["Developer", "Designer", "Manager"] as const;

export const employeeSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\d{10,15}$/.test(val.replace(/\D/g, "")), {
      message: "Phone number must be 10-15 digits",
    }),
  role: z.enum(employeeRoles, {
    message: "Please select a role",
  }),
  joiningDate: z
    .date({
      message: "Please select a joining date",
    })
    .refine((date) => date <= new Date(), {
      message: "Joining date cannot be in the future",
    }),
});

export type Employee = z.infer<typeof employeeSchema> & {
  id: string;
  createdAt: Date;
};

export type EmployeeFormData = z.infer<typeof employeeSchema>;

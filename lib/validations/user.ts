import * as z from "zod";

// Define a regex pattern for the allowed characters
const allowedCharactersPattern = /^[a-zA-Z0-9_]+$/;

export const UserValidation = z.object({
  profile_photo: z.string().url().min(1),
  name: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  username: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." })
    .refine((value) => allowedCharactersPattern.test(value), {
      message: "Username must contain only letters, digits, and underscores",
    }),
  bio: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." })
    .max(1000, { message: "Maximum 1000 caracters." }),
});

import * as z from "zod"; // Import the 'zod' library for schema validation.

// Define a regular expression pattern for allowed characters in the username.
const allowedCharactersPattern = /^[a-zA-Z0-9_]+$/;

// Define a validation schema for user profile data.
export const UserValidation = z.object({
  profile_photo: z.string().url().min(1), // Validate the 'profile_photo' property as a string that is a valid URL and has a minimum length of 1 character.
  name: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." }) // Validate the 'name' property as a string with a minimum length of 3 characters.
    .max(30, { message: "Maximum 30 characters." }), // Ensure the 'name' property does not exceed 30 characters.
  username: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." }) // Validate the 'username' property as a string with a minimum length of 3 characters.
    .max(30, { message: "Maximum 30 characters." }) // Ensure the 'username' property does not exceed 30 characters.
    .refine((value) => allowedCharactersPattern.test(value), {
      message: "Username must contain only letters, digits, and underscores", // Additional validation: 'username' must match the allowed characters pattern.
    }),
  bio: z
    .string()
    .trim()
    .min(3, { message: "Minimum 3 characters." }) // Validate the 'bio' property as a string with a minimum length of 3 characters.
    .max(1000, { message: "Maximum 1000 characters." }), // Ensure the 'bio' property does not exceed 1000 characters.
});

import * as z from "zod"; // Import the 'zod' library for schema validation.

// Define a validation schema for creating or updating a thread.
export const ThreadValidation = z.object({
  thread: z.string().trim().min(3, { message: "Minimum 3 characters." }), // Validate the 'thread' property as a string with a minimum length of 3 characters.
  accountId: z.string(), // Validate the 'accountId' property as a string.
});

// Define a validation schema for adding a comment to a thread.
export const CommentValidation = z.object({
  thread: z.string().trim().min(3, { message: "Minimum 3 characters." }), // Validate the 'thread' property as a string with a minimum length of 3 characters.
});

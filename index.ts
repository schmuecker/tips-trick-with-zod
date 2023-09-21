import { z } from "zod";

/**
 * 01. Was ist zod?
 * Eine Validation Library mit Type-Inference (und mehr)
 */
// const userSchema = z.object({
//   name: z.string(),
//   age: z.number().min(0).max(150),
//   email: z.string().email(),
// });

// // Data e.g. from API
// const user = {};

// // Parse data with schema
// const parsedUser = userSchema.parse(user);
// console.log(parsedUser);

/**
 * 02. Type Inference
 * */
// type User = z.infer<typeof userSchema>;
// const anotherUser: User = {}

/**
 * 03. Parsing
 */
// const emailSchema = z.string().email();
// // const email = "ccc@intuity.de";
// const email = "ccc";
// emailSchema.parse(email);

/**
 * 04. Safe Parsing
 */

/**
 * 05. Coercion
 */
// // const coercedSchema = z.coerce.string();
// const coercedSchema = z.string();
// const numberOrString = 12
// const coercedValue = coercedSchema.parse(numberOrString)
// console.log(coercedValue)

/**
 * 06. Function Schemas
 */
const functionSchema = z
  .function()
  .args(z.string()) // accepts an arbitrary number of arguments
  .returns(z.number());

const trimmedLength = functionSchema.implement((x) => {
  // TypeScript knows x is a string!
  return x.trim().length;
});

console.log(trimmedLength("sandwich"));
console.log(trimmedLength(" asdf "));

// // Throws when argument or return type is wrong
// trimmedLength(123);

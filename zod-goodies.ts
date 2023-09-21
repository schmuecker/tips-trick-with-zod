import { z } from "zod";

/**
 * Many libraries use zod.
 * APIs: tRPC
 * Forms: Formik, React Hook Form
 * Zod to X: JSON Schema, OpenAPI, GraphQL
 * X to Zod: Prisma, JSON Schema
 * Mocks: Mock Data Generation
 * ...
 * and even more:
 * https://github.com/colinhacks/zod#ecosystem
 */

const schema = z.string().email().min(5);
const data = "abc";
const result = schema.safeParse(data);

if (!result.success) {
  const zodError = result.error;
  throw new Error(zodError.message);
  //   const nicerError = fromZodError(zodError);
  //   const niceMessage = nicerError.message;
  //   throw new Error(niceMessage);
}

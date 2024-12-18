import { z } from "zod";
export const verifySchema = z.object({
  indentifier: z.string(),
  password: z.string(),
  
});

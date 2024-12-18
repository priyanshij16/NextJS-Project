import { z } from "zod";

export const messageSchema = z.object({
  //   acceptMessage: z.boolean (),
  content: z
    .string()
    .min(10, { message: "Content must be of 10 char" })
    .max(100, { message: "Content must be of 100 char" }),
});

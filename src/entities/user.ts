import { password } from "bun";
import { z } from "zod";

export const User = z.object({
  id: z.string().cuid().optional(),
  username: z.string().min(3).max(255),
  password: z.string().max(255).min(8),
  role: z.enum(["user", "admin"]).optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional()
})

export type UserType = z.infer<typeof User>

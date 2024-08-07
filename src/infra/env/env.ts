import { z } from "zod";

export const envSchema = z.object({
  BACKEND_BASE_URL: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_PRIVATE_KEY: z.string(),
  NODE_ENV: z.string().optional().default("development"),
  PORT: z.coerce.number().optional().default(3333),
});

export type Env = z.infer<typeof envSchema>;

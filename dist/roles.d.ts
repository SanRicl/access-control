import { z } from 'zod';
export declare const roleSchema: z.ZodUnion<[z.ZodLiteral<"OWNER">, z.ZodLiteral<"ADMIN">, z.ZodLiteral<"BILLING">, z.ZodLiteral<"BASIC">]>;
export type Role = z.infer<typeof roleSchema>;

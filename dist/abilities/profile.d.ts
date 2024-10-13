import { z } from 'zod';
export declare const profileTypeName: z.ZodLiteral<"Profile">;
export declare const profileSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"delete">, z.ZodLiteral<"update">]>, z.ZodLiteral<"Profile">], null>;
export type ProfileTypeName = z.infer<typeof profileTypeName>;
export type ProfileSubject = z.infer<typeof profileSubject>;

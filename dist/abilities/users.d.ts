import { z } from 'zod';
declare const usersSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: string;
}, {
    id: string;
    role: string;
}>;
export declare const usersTypeName: z.ZodLiteral<"Users">;
export declare const usersSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"create">, z.ZodLiteral<"delete">, z.ZodLiteral<"update">]>, z.ZodLiteral<"Users">], null>;
export type UsersTypeName = z.infer<typeof usersTypeName>;
export type UsersSubject = z.infer<typeof usersSubject>;
export type UserPermission = z.infer<typeof usersSchema>;
export {};

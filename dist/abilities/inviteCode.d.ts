import { z } from 'zod';
export declare const inviteTypeName: z.ZodLiteral<"Invite">;
export declare const inviteSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"create">, z.ZodLiteral<"accept">, z.ZodLiteral<"revoke">]>, z.ZodLiteral<"Invite">], null>;
export type InviteTypeName = z.infer<typeof inviteTypeName>;
export type InviteSubject = z.infer<typeof inviteSubject>;

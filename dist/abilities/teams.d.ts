import { z } from 'zod';
export declare const memberSchemaValidation: z.ZodObject<{
    user_id: z.ZodString;
    organization_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    organization_id: string;
}, {
    user_id: string;
    organization_id: string;
}>;
export declare const teamsTypeName: z.ZodLiteral<"Team">;
export declare const teamsSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"create">]>, z.ZodUnion<[z.ZodObject<{
    user_id: z.ZodString;
    organization_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    organization_id: string;
}, {
    user_id: string;
    organization_id: string;
}>, z.ZodLiteral<"Team">]>], null>;
export type TeamsTypeName = z.infer<typeof teamsTypeName>;
export type TeamsSubject = z.infer<typeof teamsSubject>;

import { z } from 'zod';
declare const organizationTypeName: z.ZodLiteral<"Organization">;
export declare const organizationSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"transfer_ownership">]>, z.ZodUnion<[z.ZodLiteral<"Organization">, z.ZodObject<{
    organization_email: z.ZodString;
    business_name: z.ZodString;
    fantasy_name: z.ZodString;
    phone: z.ZodString;
    registration_number: z.ZodString;
}, "strip", z.ZodTypeAny, {
    organization_email: string;
    business_name: string;
    fantasy_name: string;
    phone: string;
    registration_number: string;
}, {
    organization_email: string;
    business_name: string;
    fantasy_name: string;
    phone: string;
    registration_number: string;
}>]>], null>;
export type OrganizationTypeName = z.infer<typeof organizationTypeName>;
export type OrganizationSubject = z.infer<typeof organizationSubject>;
export {};

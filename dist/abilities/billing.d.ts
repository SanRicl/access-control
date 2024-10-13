import { z } from 'zod';
export declare const billingTypeName: z.ZodLiteral<"Billing">;
export declare const billingSubject: z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"export">]>, z.ZodLiteral<"Billing">], null>;
export type BillingTypeName = z.infer<typeof billingTypeName>;
export type BillingSubject = z.infer<typeof billingSubject>;

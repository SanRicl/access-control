import { UserPermission } from "./abilities/users";
import { CreateAbility, MongoAbility } from "@casl/ability";
import { z } from "zod";
declare const appAbilities: z.ZodUnion<[z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"export">]>, z.ZodLiteral<"Billing">], null>, z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"create">, z.ZodLiteral<"accept">, z.ZodLiteral<"revoke">]>, z.ZodLiteral<"Invite">], null>, z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"transfer_ownership">]>, z.ZodUnion<[z.ZodLiteral<"Organization">, z.ZodObject<{
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
}>]>], null>, z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"create">, z.ZodLiteral<"delete">, z.ZodLiteral<"update">]>, z.ZodLiteral<"Users">], null>, z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"delete">, z.ZodLiteral<"update">]>, z.ZodLiteral<"Profile">], null>, z.ZodTuple<[z.ZodUnion<[z.ZodLiteral<"manage">, z.ZodLiteral<"get">, z.ZodLiteral<"update">, z.ZodLiteral<"delete">, z.ZodLiteral<"create">]>, z.ZodUnion<[z.ZodObject<{
    user_id: z.ZodString;
    organization_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user_id: string;
    organization_id: string;
}, {
    user_id: string;
    organization_id: string;
}>, z.ZodLiteral<"Team">]>], null>, z.ZodTuple<[z.ZodLiteral<"manage">, z.ZodLiteral<"all">], null>]>;
type AppAbilities = z.infer<typeof appAbilities>;
export type AppAbility = MongoAbility<AppAbilities>;
export declare const createAppAbility: CreateAbility<AppAbility>;
export declare function defineAbilityFor(user: UserPermission): AppAbility;
export {};

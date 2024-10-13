import { permissions } from "./permissions";
import { billingSubject } from "./abilities/billing";
import { inviteSubject } from "./abilities/inviteCode";
import { organizationSubject } from "./abilities/organization";
import { UserPermission, usersSubject } from "./abilities/users";
import { profileSubject } from "./abilities/profile";
import { teamsSubject } from "./abilities/teams";

import {
  AbilityBuilder,
  CreateAbility,
  createMongoAbility,
  MongoAbility
} from "@casl/ability";
import { z } from "zod";

const appAbilities = z.union([
  billingSubject,
  inviteSubject,
  organizationSubject,
  usersSubject,
  profileSubject,
  teamsSubject,
  z.tuple([z.literal("manage"), z.literal("all")])
]);

type AppAbilities = z.infer<typeof appAbilities>;

export type AppAbility = MongoAbility<AppAbilities>;

export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>;

export function defineAbilityFor(user: UserPermission): AppAbility {
  const builder = new AbilityBuilder<AppAbility>(createAppAbility);

  if (typeof permissions[user.role] === "function") {
    permissions[user.role](user, builder);
  } else {
    throw new Error(`Trying to use unknown role "${user.role}"`);
  }

  const ability = builder.build();

  ability.can = ability.can.bind(ability);
  ability.cannot = ability.cannot.bind(ability);

  return ability;
}

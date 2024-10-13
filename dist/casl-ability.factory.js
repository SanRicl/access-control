"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAppAbility = void 0;
exports.defineAbilityFor = defineAbilityFor;
const permissions_1 = require("./permissions");
const billing_1 = require("./abilities/billing");
const inviteCode_1 = require("./abilities/inviteCode");
const organization_1 = require("./abilities/organization");
const users_1 = require("./abilities/users");
const profile_1 = require("./abilities/profile");
const teams_1 = require("./abilities/teams");
const ability_1 = require("@casl/ability");
const zod_1 = require("zod");
const appAbilities = zod_1.z.union([
    billing_1.billingSubject,
    inviteCode_1.inviteSubject,
    organization_1.organizationSubject,
    users_1.usersSubject,
    profile_1.profileSubject,
    teams_1.teamsSubject,
    zod_1.z.tuple([zod_1.z.literal("manage"), zod_1.z.literal("all")])
]);
exports.createAppAbility = ability_1.createMongoAbility;
function defineAbilityFor(user) {
    const builder = new ability_1.AbilityBuilder(exports.createAppAbility);
    if (typeof permissions_1.permissions[user.role] === "function") {
        permissions_1.permissions[user.role](user, builder);
    }
    else {
        throw new Error(`Trying to use unknown role "${user.role}"`);
    }
    const ability = builder.build();
    ability.can = ability.can.bind(ability);
    ability.cannot = ability.cannot.bind(ability);
    return ability;
}
//# sourceMappingURL=casl-ability.factory.js.map
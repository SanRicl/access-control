import { AbilityBuilder } from '@casl/ability';
import { AppAbility } from './casl-ability.factory';
import { Role } from './roles';
import { UserPermission } from './abilities/users';
type UserPermissions = (user: UserPermission, builder: AbilityBuilder<AppAbility>) => void;
export declare const permissions: Record<Role, UserPermissions>;
export {};

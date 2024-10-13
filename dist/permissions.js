"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
exports.permissions = {
    OWNER(_, { can }) {
        can('manage', 'all');
    },
    ADMIN(user, { can, cannot }) {
        can('manage', 'all');
        cannot('transfer_ownership', 'Organization');
        can('transfer_ownership', 'Organization', { owner_id: { $eq: user.id } });
    },
    BILLING(_, { can }) {
        can('manage', 'Billing');
        can('get', 'Team');
        can('accept', 'Invite');
    },
    BASIC(user, { can, cannot }) {
        can('accept', 'Invite');
        can('get', 'Users');
        can('get', 'Profile');
        can(['get', 'create'], 'Team');
        cannot('delete', 'Team');
        can('delete', 'Team', { user_id: { $eq: user.id } });
    },
};
//# sourceMappingURL=permissions.js.map
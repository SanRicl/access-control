"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteSubject = exports.inviteTypeName = void 0;
const zod_1 = require("zod");
exports.inviteTypeName = zod_1.z.literal('Invite');
exports.inviteSubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal('manage'),
        zod_1.z.literal('get'),
        zod_1.z.literal('create'),
        zod_1.z.literal('accept'),
        zod_1.z.literal('revoke'),
    ]),
    exports.inviteTypeName,
]);
//# sourceMappingURL=inviteCode.js.map
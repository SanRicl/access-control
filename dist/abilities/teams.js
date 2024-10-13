"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsSubject = exports.teamsTypeName = exports.memberSchemaValidation = void 0;
const zod_1 = require("zod");
exports.memberSchemaValidation = zod_1.z.object({
    user_id: zod_1.z.string(),
    organization_id: zod_1.z.string(),
});
exports.teamsTypeName = zod_1.z.literal('Team');
exports.teamsSubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal('manage'),
        zod_1.z.literal('get'),
        zod_1.z.literal('update'),
        zod_1.z.literal('delete'),
        zod_1.z.literal('create'),
    ]),
    zod_1.z.union([exports.memberSchemaValidation, exports.teamsTypeName]),
]);
//# sourceMappingURL=teams.js.map
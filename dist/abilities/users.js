"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSubject = exports.usersTypeName = void 0;
const zod_1 = require("zod");
const usersSchema = zod_1.z.object({
    id: zod_1.z.string().min(1).uuid(),
    role: zod_1.z.string().min(1)
});
exports.usersTypeName = zod_1.z.literal('Users');
exports.usersSubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal('manage'),
        zod_1.z.literal('get'),
        zod_1.z.literal('create'),
        zod_1.z.literal('delete'),
        zod_1.z.literal('update'),
    ]),
    exports.usersTypeName,
]);
//# sourceMappingURL=users.js.map
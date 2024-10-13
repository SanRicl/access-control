"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileSubject = exports.profileTypeName = void 0;
const zod_1 = require("zod");
exports.profileTypeName = zod_1.z.literal('Profile');
exports.profileSubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal('manage'),
        zod_1.z.literal('get'),
        zod_1.z.literal('delete'),
        zod_1.z.literal('update'),
    ]),
    exports.profileTypeName,
]);
//# sourceMappingURL=profile.js.map
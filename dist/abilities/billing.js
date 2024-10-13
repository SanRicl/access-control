"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billingSubject = exports.billingTypeName = void 0;
const zod_1 = require("zod");
exports.billingTypeName = zod_1.z.literal('Billing');
exports.billingSubject = zod_1.z.tuple([
    zod_1.z.union([zod_1.z.literal('manage'), zod_1.z.literal('get'), zod_1.z.literal('export')]),
    exports.billingTypeName,
]);
//# sourceMappingURL=billing.js.map
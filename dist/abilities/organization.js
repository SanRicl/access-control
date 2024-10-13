"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.organizationSubject = void 0;
const zod_1 = require("zod");
const organizationTypeName = zod_1.z.literal('Organization');
const organizationSchemaValidation = zod_1.z.object({
    organization_email: zod_1.z.string().email('Invalid email address'),
    business_name: zod_1.z
        .string()
        .min(1, 'Please inform business name')
        .max(120, 'Too many characters'),
    fantasy_name: zod_1.z
        .string()
        .min(1, 'Please inform fantasy name.')
        .max(120, 'Too many characters.'),
    phone: zod_1.z.string(),
    registration_number: zod_1.z
        .string()
        .min(1, 'Please inform a registration number.')
        .max(50, 'Too many characters.'),
});
exports.organizationSubject = zod_1.z.tuple([
    zod_1.z.union([
        zod_1.z.literal('update'),
        zod_1.z.literal('delete'),
        zod_1.z.literal('transfer_ownership'),
    ]),
    zod_1.z.union([organizationTypeName, organizationSchemaValidation]),
]);
//# sourceMappingURL=organization.js.map
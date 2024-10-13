import { z } from 'zod'

const organizationTypeName = z.literal('Organization')

const organizationSchemaValidation = z.object({
  organization_email: z.string().email('Invalid email address'),

  business_name: z
    .string()
    .min(1, 'Please inform business name')
    .max(120, 'Too many characters'),

  fantasy_name: z
    .string()
    .min(1, 'Please inform fantasy name.')
    .max(120, 'Too many characters.'),

  phone: z.string(),

  registration_number: z
    .string()
    .min(1, 'Please inform a registration number.')
    .max(50, 'Too many characters.'),
})

export const organizationSubject = z.tuple([
  z.union([
    z.literal('update'),
    z.literal('delete'),
    z.literal('transfer_ownership'),
  ]),
  z.union([organizationTypeName, organizationSchemaValidation]),
])

export type OrganizationTypeName = z.infer<typeof organizationTypeName>
export type OrganizationSubject = z.infer<typeof organizationSubject>

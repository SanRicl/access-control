import { z } from 'zod'

export const billingTypeName = z.literal('Billing')

export const billingSubject = z.tuple([
  z.union([z.literal('manage'), z.literal('get'), z.literal('export')]),
  billingTypeName,
])

export type BillingTypeName = z.infer<typeof billingTypeName>
export type BillingSubject = z.infer<typeof billingSubject>

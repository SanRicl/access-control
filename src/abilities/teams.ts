import { z } from 'zod'

export const memberSchemaValidation = z.object({
  user_id: z.string(),
  organization_id: z.string(),
})

// Teams
export const teamsTypeName = z.literal('Team')

export const teamsSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('update'),
    z.literal('delete'),
    z.literal('create'),
  ]),
  z.union([memberSchemaValidation, teamsTypeName]),
])

export type TeamsTypeName = z.infer<typeof teamsTypeName>
export type TeamsSubject = z.infer<typeof teamsSubject>

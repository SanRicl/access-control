import { z } from 'zod'

export const profileTypeName = z.literal('Profile')

export const profileSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  profileTypeName,
])

export type ProfileTypeName = z.infer<typeof profileTypeName>
export type ProfileSubject = z.infer<typeof profileSubject>

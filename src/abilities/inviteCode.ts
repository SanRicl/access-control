import { z } from 'zod'

export const inviteTypeName = z.literal('Invite')

export const inviteSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('accept'),
    z.literal('revoke'),
  ]),
  inviteTypeName,
])

export type InviteTypeName = z.infer<typeof inviteTypeName>
export type InviteSubject = z.infer<typeof inviteSubject>

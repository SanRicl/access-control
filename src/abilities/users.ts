import { z } from 'zod'

const usersSchema = z.object({
  id: z.string().min(1).uuid(),
  role: z.string().min(1)
})

export const usersTypeName = z.literal('Users')

export const usersSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('delete'),
    z.literal('update'),
  ]),
  usersTypeName,
])

export type UsersTypeName = z.infer<typeof usersTypeName>
export type UsersSubject = z.infer<typeof usersSubject>
export type UserPermission = z.infer<typeof usersSchema>;

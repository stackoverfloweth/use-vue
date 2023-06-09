import { UserType } from '@/models'

export type UserSearchQuery = {
  userName?: string,
  orgName?: string,
  textMatch?: string,
  type?: UserType,
  location?: string,
  language?: string,
  followersMin?: number,
  followersMax?: number,
}
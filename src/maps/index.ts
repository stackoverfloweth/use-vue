import { mapUserSearchToUser } from '@/maps/user'
import { mapUserSearchQueryToString } from '@/maps/userSearchQuery'

export const maps = {
  UserSearch: { User: mapUserSearchToUser },
  UserSearchQuery: { string: mapUserSearchQueryToString },
}
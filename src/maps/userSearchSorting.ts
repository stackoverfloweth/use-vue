import { MapFunction } from '@/services/mapper'
import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'

export const mapUserSearchSortingToQueryString: MapFunction<UserSearchSorting, string[]> = function(source) {
  return [
    `sort=${source.sort ?? 'joined'}`,
    `order=${source.order ?? 'desc'}`,
  ]
}
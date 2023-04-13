import { mapPaginationToQueryString } from '@/maps/pagination'
import { mapUserSearchResultToUser } from '@/maps/user'
import { mapUserSearchQueryToQueryString } from '@/maps/userSearchQuery'
import { mapUserSearchRequestToQueryString } from '@/maps/userSearchRequest'
import { mapUserSearchSortingToQueryString } from '@/maps/userSearchSorting'

export const maps = {
  Pagination: { QueryString: mapPaginationToQueryString },
  UserSearchRequest: { QueryString: mapUserSearchRequestToQueryString },
  UserSearchResult: { User: mapUserSearchResultToUser },
  UserSearchSorting: { QueryString: mapUserSearchSortingToQueryString },
  UserSearchQuery: { QueryString: mapUserSearchQueryToQueryString },
}
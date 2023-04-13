import { MapFunction } from '@/services/mapper'
import { UserSearchRequest } from '@/types/gitHub/useSearchRequest'

export const mapUserSearchRequestToQueryString: MapFunction<UserSearchRequest, string> = function(source) {
  return [
    ...this.map('Pagination', source.pagination ?? {}, 'QueryString'),
    ...this.map('UserSearchQuery', { ...source.search, language: 'vue' }, 'QueryString'),
    ...this.map('UserSearchSorting', source.sorting ?? {}, 'QueryString'),
  ].join('&')
}
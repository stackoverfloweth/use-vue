import { MapFunction } from '@/services/mapper'
import { Pagination } from '@/types/gitHub/pagination'

export const mapPaginationToQueryString: MapFunction<Pagination, string[]> = function(source) {
  return [
    `per_page=${source.perPage ?? 30}`,
    `page=${source.page ?? 1}`,
  ]
}
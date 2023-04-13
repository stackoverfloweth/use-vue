import { Pagination } from '@/types/gitHub/pagination'
import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'

export type UserSearchRequest = {
  search?: UserSearchQuery,
  pagination?: Pagination,
  sorting?: UserSearchSorting,
}
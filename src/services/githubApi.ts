import { User, UserType } from '@/models'
import { mapper } from '@/services/mapper'
import { SearchResult, UserSearch } from '@/types'
import { Pagination } from '@/types/gitHub/pagination'
import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'
import { variables } from '@/utilities'

export async function getVueUsers(search: UserSearchQuery = {}, pagination: Pagination = { 'per_page': 30, 'page': 1 }, sorting: UserSearchSorting = { sort: 'joined', order: 'desc' }): Promise<User[]> {
  const query = mapper.map('UserSearchQuery', { ...search, language: 'vue' }, 'string')

  const response = await fetch(`${variables.githubBaseUrl}/search/users?q=${query}&sort=${sorting.sort}&order=${sorting.order}&per_page=${pagination.per_page}&page=${pagination.page}`, {
    headers: { Authorization: `bearer: ${variables.githubToken}` },
  })

  const data: SearchResult<UserSearch> = await response.json()

  return mapper.map('UserSearch', data.items, 'User')
}

export async function getVueUserCount(type: UserType): Promise<number> {
  const query = mapper.map('UserSearchQuery', { language: 'vue', type }, 'string')

  const response = await fetch(`${variables.githubBaseUrl}/search/users?q=${query}&per_page=1`, {
    headers: { Authorization: `bearer: ${variables.githubToken}` },
  })

  const data: SearchResult<UserSearch> = await response.json()

  return data.total_count
}
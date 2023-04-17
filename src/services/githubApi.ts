import { User, UserType } from '@/models'
import { mapper } from '@/services/mapper'
import { SearchResult, UserSearchResult } from '@/types'
import { UserSearchRequest } from '@/types/gitHub/useSearchRequest'
import { PaginatedResponse } from '@/types/paginatedResponse'
import { variables } from '@/utilities'

const options: RequestInit = {
  headers: { Authorization: `bearer: ${variables.githubToken}` },
}

export async function getVueUsers(request: UserSearchRequest = { search: {}, pagination: {}, sorting: {} }): Promise<PaginatedResponse<User>> {
  const query = mapper.map('UserSearchRequest', request, 'QueryString')

  const response = await fetch(`${variables.githubBaseUrl}/search/users?${query}`, options)
  const data: SearchResult<UserSearchResult> = await response.json()

  return {
    count: data.total_count,
    items: mapper.map('UserSearchResult', data.items, 'User'),
  }
}

export async function getVueUserCount(type: UserType): Promise<number> {
  const request = { pagination: { perPage: 1 }, search: { type } }
  const query = mapper.map('UserSearchRequest', request, 'QueryString')

  const response = await fetch(`${variables.githubBaseUrl}/search/users?${query}`, options)
  const data: SearchResult<UserSearchResult> = await response.json()

  return data.total_count
}
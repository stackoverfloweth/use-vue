import { createActions } from '@prefecthq/vue-compositions'
import { User, UserType } from '@/models'
import { BaseApi } from '@/services/baseApi'
import { mapper } from '@/services/mapper'
import { AuthenticatedApiConfig, SearchResult, UserSearch } from '@/types'
import { Pagination } from '@/types/gitHub/pagination'
import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'
import { UserSearchSorting } from '@/types/gitHub/userSearchSorting'
import { variables } from '@/utilities'

export class GitHubApi extends BaseApi<AuthenticatedApiConfig> {
  public constructor() {
    super({
      baseURL: variables.githubBaseUrl,
      apiKey: variables.githubToken,
    })
  }

  public getVueUsers(search: UserSearchQuery = {}, pagination: Pagination = { 'per_page': 30, 'page': 1 }, sorting: UserSearchSorting = { sort: 'joined', order: 'desc' }): Promise<User[]> {
    const query = mapper.map('UserSearchQuery', { ...search, language: 'vue' }, 'string')

    return this.getInstance().get<SearchResult<UserSearch>>(`/search/users?q=${query}&sort=${sorting.sort}&order=${sorting.order}&per_page=${pagination.per_page}&page=${pagination.page}`)
      .then(({ data }) => mapper.map('UserSearch', data.items, 'User'))
  }

  public async getVueUserCount(type: UserType): Promise<number> {
    const query = mapper.map('UserSearchQuery', { language: 'vue', type }, 'string')

    const response = await fetch(`${variables.githubBaseUrl}/search/users?q=${query}&per_page=1`, {
      headers: { Authorization: `bearer: ${variables.githubToken}` },
    })

    const data: SearchResult<UserSearch> = await response.json()

    return data.total_count
  }
}

export const githubApi = createActions(new GitHubApi())
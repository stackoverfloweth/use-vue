import { createActions } from '@prefecthq/vue-compositions'
import { User } from '@/models'
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
      baseURL: 'https://api.github.com',
      apiKey: variables.githubToken,
    })
  }

  public getVueUsers(search: UserSearchQuery = {}, pagination: Pagination = { 'per_page': 30, 'page': 1 }, sorting: UserSearchSorting = { sort: 'joined', order: 'desc' }): Promise<User[]> {
    const query = mapper.map('UserSearchQuery', { ...search, language: 'vue' }, 'string')

    return this.getInstance().get<SearchResult<UserSearch>>(`/search/users?q=${query}&sort=${sorting.sort}&order=${sorting.order}&per_page=${pagination.per_page}&page=${pagination.page}`)
      .then(({ data }) => mapper.map('UserSearch', data.items, 'User'))
  }
}

export const githubApi = createActions(new GitHubApi())
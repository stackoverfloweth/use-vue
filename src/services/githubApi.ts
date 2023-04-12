import { createActions } from '@prefecthq/vue-compositions'
import { User } from '@/models'
import { BaseApi } from '@/services/baseApi'
import { mapper } from '@/services/mapper'
import { AuthenticatedApiConfig, SearchResult, UserSearch } from '@/types'
import { variables } from '@/utilities'

export class GitHubApi extends BaseApi<AuthenticatedApiConfig> {
  public constructor() {
    super({
      baseURL: 'https://api.github.com',
      apiKey: variables.githubToken,
    })
  }

  public getVueUsers(): Promise<User[]> {
    return this.getInstance().get<SearchResult<UserSearch>>('/search/users?q=language:vue+followers:>5&sort=joined&per_page=10')
      .then(({ data }) => {
        return mapper.map('UserSearch', data.items, 'User')
      })
  }
}

export const githubApi = createActions(new GitHubApi())
import { BaseApi } from '@/services/baseApi'
import { AuthenticatedApiConfig } from '@/types'
import { variables } from '@/utilities'

export class GitHubApi extends BaseApi<AuthenticatedApiConfig> {
  public constructor() {
    super({
      apiKey: variables.githubToken,
    })
  }
}
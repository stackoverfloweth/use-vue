import { BaseApiConfig } from '@/services/baseApi'

export type AuthenticatedApiConfig = BaseApiConfig & {
  apiKey: string,
}

export function isAuthenticatedApiConfig(config: BaseApiConfig | AuthenticatedApiConfig): config is AuthenticatedApiConfig {
  return 'apiKey' in config
}
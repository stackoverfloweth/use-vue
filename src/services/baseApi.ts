import axios, { AxiosInstance, AxiosRequestTransformer, AxiosResponseTransformer, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import { ApiFailureError } from '@/models/apiFailureError'
import { AuthenticatedApiConfig, isAuthenticatedApiConfig } from '@/types/authenticatedApiConfig'
import { isFailureResponse } from '@/types/failureResponse'
import { variables, isDefined, asArray } from '@/utilities'

export type BaseApiConfig = CreateAxiosDefaults

export class BaseApi<T extends BaseApiConfig | AuthenticatedApiConfig = BaseApiConfig> {
  protected readonly apiConfig: T
  protected routePrefix: string | undefined

  public constructor(apiConfig: T, routePrefix?: string) {
    this.apiConfig = apiConfig
    this.routePrefix = routePrefix
  }

  protected get instance(): AxiosInstance {
    return axios.create({
      ...this.apiConfig,
      baseURL: this.composeBaseUrl(),
      headers: this.composeHeaders(),
      transformResponse: this.composeResponseTransformers(),
      transformRequest: this.composeRequestTransformers(),
    })
  }

  protected get authorizationHeader(): { Authorization?: string } {
    if (isAuthenticatedApiConfig(this.apiConfig)) {
      return {
        Authorization: `bearer ${this.apiConfig.apiKey}`,
      }
    }

    return {}
  }

  protected checkApiFailureResponse(this: InternalAxiosRequestConfig, data: unknown): unknown {
    if (isFailureResponse(data)) {
      throw new ApiFailureError(data)
    }

    return data
  }

  protected composeBaseUrl(): string {
    const repeatingSlashes = /(\/+)/g

    return [
      this.apiConfig.baseURL ?? variables.baseUrl,
      this.routePrefix,
    ]
      .filter(isDefined)
      .join('/')
      .replace(repeatingSlashes, '/')
  }

  protected composeHeaders(): BaseApiConfig['headers'] {
    return {
      ...this.authorizationHeader,
      ...this.apiConfig.headers,
    }
  }

  protected composeResponseTransformers(): AxiosResponseTransformer[] {
    return [
      ...asArray(axios.defaults.transformResponse ?? []),
      this.checkApiFailureResponse,
      ...asArray(this.apiConfig.transformResponse ?? []),
    ]
  }

  protected composeRequestTransformers(): AxiosRequestTransformer[] {
    return [
      ...asArray(this.apiConfig.transformRequest ?? []),
      ...asArray(axios.defaults.transformRequest ?? []),
    ]
  }
}


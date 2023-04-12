import { AxiosResponse } from 'axios'

export type FailureResponse = {
  message: string,
  success: false,
}

export function isFailureResponse(data: AxiosResponse['data']): data is FailureResponse {
  return data?.success === false
}
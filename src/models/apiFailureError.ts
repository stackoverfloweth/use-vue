import { FailureResponse } from '@/types'

export class ApiFailureError extends Error {
  public constructor(error: FailureResponse) {
    super(error.message)
  }
}
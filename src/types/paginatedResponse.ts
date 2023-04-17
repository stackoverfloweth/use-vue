export type PaginatedResponse<T> = {
  count: number,
  items: T[],
}
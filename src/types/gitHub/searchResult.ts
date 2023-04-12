export type SearchResult<T> = {
  total_count: number,
  incomplete_results: number,
  items: T[],
}
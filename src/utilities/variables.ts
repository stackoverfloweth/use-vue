export type Variables = {
  githubToken: string,
  githubBaseUrl: string,
}

export const variables: Variables = {
  githubToken: import.meta.env.VITE_GITHUB_TOKEN,
  githubBaseUrl: import.meta.env.VITE_GITHUB_BASE_URL,
}

export function sameValue(valueA: unknown, valueB: unknown): boolean {
  return JSON.stringify(valueA) === JSON.stringify(valueB)
}
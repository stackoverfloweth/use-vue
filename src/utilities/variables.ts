export type Variables = {
  githubToken: string,
  githubBaseUrl: string,
}

export const variables: Variables = {
  githubToken: import.meta.env.VITE_GITHUB_TOKEN,
  githubBaseUrl: import.meta.env.VITE_GITHUB_BASE_URL,
}
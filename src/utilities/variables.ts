export type Variables = {
  githubToken: string,
}

export const variables: Variables = {
  githubToken: import.meta.env.VITE_GITHUB_TOKEN,
}
export type Variables = {
  baseUrl: string,
}

export const variables: Variables = {
  baseUrl: import.meta.env.VITE_BASE_URL,
}
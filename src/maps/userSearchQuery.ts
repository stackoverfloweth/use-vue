import { MapFunction } from '@/services/mapper'
import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'

export const mapUserSearchQueryToString: MapFunction<UserSearchQuery, string> = function(source) {
  const queries: string[] = []

  if (source.userName) {
    queries.push(`user:${source.userName}`)
  } else if (source.orgName) {
    queries.push(`org:${source.orgName}`)
  }

  if (source.language) {
    queries.push(`language:${source.language}`)
  }

  if (source.location) {
    queries.push(`location:${source.location}`)
  }

  if (source.followersMin) {
    if (source.followersMax) {
      queries.push(`followers:${source.followersMin}..${source.followersMax}`)
    } else {
      queries.push(`followers:>=${source.followersMin}`)
    }
  }

  return queries.join('+')
}
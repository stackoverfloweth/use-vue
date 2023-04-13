import { MapFunction } from '@/services/mapper'
import { UserSearchQuery } from '@/types/gitHub/userSearchQuery'

export const mapUserSearchQueryToQueryString: MapFunction<UserSearchQuery, string[]> = function(source) {
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

  if (source.type) {
    queries.push(`type:${source.type === 'Organization' ? 'org' : source.type}`)
  }

  if (source.followersMin) {
    if (source.followersMax) {
      queries.push(`followers:${source.followersMin}..${source.followersMax}`)
    } else {
      queries.push(`followers:>=${source.followersMin}`)
    }
  }

  return [`q=${queries.join('+')}`]
}
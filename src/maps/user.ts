import { User, UserType } from '@/models/user'
import { MapFunction } from '@/services/mapper'
import { UserSearchResult } from '@/types/gitHub'

export const mapUserSearchResultToUser: MapFunction<UserSearchResult, User> = function(source) {
  return new User({
    login: source.login,
    id: source.id,
    nodeId: source.node_id,
    avatarUrl: source.avatar_url,
    gravatarId: source.gravatar_id,
    url: source.url,
    htmlUrl: source.html_url,
    followersUrl: source.followers_url,
    followingUrl: source.following_url,
    gistsUrl: source.gists_url,
    starredUrl: source.starred_url,
    subscriptionsUrl: source.subscriptions_url,
    organizationsUrl: source.organizations_url,
    reposUrl: source.repos_url,
    eventsUrl: source.events_url,
    receivedEventsUrl: source.received_events_url,
    type: source.type as UserType,
    siteAdmin: source.site_admin,
    score: source.score,
  })
}
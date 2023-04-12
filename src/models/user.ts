export type UserType = 'User' | 'Organization'

export interface IUser {
  login: string,
  id: number,
  nodeId: string,
  avatarUrl: string,
  gravatarId: string,
  url: string,
  htmlUrl: string,
  followersUrl: string,
  followingUrl: string,
  gistsUrl: string,
  starredUrl: string,
  subscriptionsUrl: string,
  organizationsUrl: string,
  reposUrl: string,
  eventsUrl: string,
  receivedEventsUrl: string,
  type: UserType,
  siteAdmin: boolean,
  score: number,
}

export class User {
  public login: string
  public id: number
  public nodeId: string
  public avatarUrl: string
  public gravatarId: string
  public url: string
  public htmlUrl: string
  public followersUrl: string
  public followingUrl: string
  public gistsUrl: string
  public starredUrl: string
  public subscriptionsUrl: string
  public organizationsUrl: string
  public reposUrl: string
  public eventsUrl: string
  public receivedEventsUrl: string
  public type: string
  public siteAdmin: boolean
  public score: number

  public constructor(user: IUser) {
    this.login = user.login
    this.id = user.id
    this.nodeId = user.nodeId
    this.avatarUrl = user.avatarUrl
    this.gravatarId = user.gravatarId
    this.url = user.url
    this.htmlUrl = user.htmlUrl
    this.followersUrl = user.followersUrl
    this.followingUrl = user.followingUrl
    this.gistsUrl = user.gistsUrl
    this.starredUrl = user.starredUrl
    this.subscriptionsUrl = user.subscriptionsUrl
    this.organizationsUrl = user.organizationsUrl
    this.reposUrl = user.reposUrl
    this.eventsUrl = user.eventsUrl
    this.receivedEventsUrl = user.receivedEventsUrl
    this.type = user.type
    this.siteAdmin = user.siteAdmin
    this.score = user.score
  }
}
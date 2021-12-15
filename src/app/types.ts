export interface INews {
  id: number
  featured: boolean
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  launches: [
    {
      id: string
      provider: string
    }
  ]
  events: [
    {
      id: string
      provider: string
    }
  ]
}
export interface INewsState {
  articles: INews[]
  errors: IErrors
  load: boolean
}
export interface IErrors {
  code: number
  message: string
}
export interface ICard {
  imagen?: string
  title: string
  description: string
  date: string
  id: number
}

import type { Entity } from "./entity"

export type Episode = Entity & {
    "air_date": string,
    "episode": string
  }

export const episodeDisplayableAttributes = [
  'name',
  'air_date',
  'episode',
]
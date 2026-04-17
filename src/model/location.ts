import type { Entity } from "./entity"

export type Location = Entity & {
    "type": string,
    "dimension": string,
    "created": string
  }

export const locationDisplayableAttributes = [
  'name',
  'type',
  'dimension',
]
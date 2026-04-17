import type { Entity } from "./entity";

export type Character = Entity & {
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

export const characterDisplayableAttributes = [
  'name',
  'status',
  'species',
  'type',
  'gender',
  'image'
];
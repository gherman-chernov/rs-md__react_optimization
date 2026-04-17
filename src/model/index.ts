import type { Entity } from "./entity";
import { type Character, characterDisplayableAttributes } from "./character";
import { type Episode, episodeDisplayableAttributes } from "./episode";
import { type Location, locationDisplayableAttributes } from "./location";

export type { Entity, Character, Episode, Location }
export { characterDisplayableAttributes, episodeDisplayableAttributes, locationDisplayableAttributes }
import type { Character } from "../model";
import characters from "./data/characters.json";

// enum CharacterFieldEnum { // erasable syntax only
//   id = 'id',
//   name = 'name',
//   status = 'status',
//   species = 'species',
//   type = 'type',
//   gender = 'gender',
// }



export async function getCharacters(): Promise<Character[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) => resolve(characters));
}

export async function getCharacter(id: number): Promise<Character | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) =>
    resolve(characters.find((character) => character.id === id)),
  );
}

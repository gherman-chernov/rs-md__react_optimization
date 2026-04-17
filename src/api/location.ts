import locations from './data/location.json';
import type {Location} from '../model';

export async function getLocations() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) => resolve(locations))
}

export async function getLocation(id: number): Promise<Location | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) =>
    resolve(locations.find((location) => location.id === id)),
  );
}
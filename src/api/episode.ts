import type { Episode } from '../model';
import episodes from './data/episode.json';

export async function getEpisodes() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) => resolve(episodes))
}

export async function getEpisode(id: number): Promise<Episode | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return new Promise((resolve) =>
    resolve(episodes.find((episode) => episode.id === id)),
  );
}
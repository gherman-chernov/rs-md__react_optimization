export type ApiResponseSummary = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

export type ApiResponsePage<T> = {
  info: ApiResponseSummary;
  results: T[];
};
export * from "./setting";

export type responseSchema<T> = {
  meta: {
    total_count: number;
    [key: string]: any;
  };
  next: string | null;
  previous: string | null;
  items: T[];
};

export interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
}



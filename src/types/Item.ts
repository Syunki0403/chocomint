export type TItem = {
  id: string;
  name: string;
  images: string[];
  price: number | null;
  shops: string;
  period_start: string;
  period_end: string;
  score_mint: number;
  score_chocolate: number;
  score: number;
  supplement: string;
  contributor: string;
  created_at: Date;
  updated_at: Date;
};

export type TPostItem = Pick<TItem, 'name' | 'price' | 'shops' | 'period_start' | 'period_end'>;

export type TPostItemError = Record<keyof TItem, string>;
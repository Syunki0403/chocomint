export type TItem = {
  id: string;
  name: string;
  images: string[];
  price: number;
  shops: string;
  period_start: string;
  period_end: string;
  score_mint: number;
  score_chocolate: number;
  score: number;
  supplement: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
};

export type TItemValidate = {
  name: string;
  price: number | null;
  shops: string;
  period_start: string;
  period_end: string;
};

export type TItemValidateError = Record<keyof TItem, string>;

export type TPostItem = Pick<
  TItem,
  | 'name'
  | 'images'
  | 'price'
  | 'shops'
  | 'period_start'
  | 'period_end'
  | 'score_mint'
  | 'score_chocolate'
  | 'score'
  | 'supplement'
>;

export type DBItemObj = Omit<TItem, 'id'>;

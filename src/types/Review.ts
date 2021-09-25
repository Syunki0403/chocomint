export type TReview = {
  id: string;
  sentence: string;
  score_mint: number;
  score_chocolate: number;
  score: number;
  contributor: string;
  created_at: Date;
  updated_at: Date;
};

export type TPostReview = Pick<TReview, 'sentence'>;

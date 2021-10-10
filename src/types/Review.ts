type UserInfo = {
  id: string;
  name: string;
};

export type TReview = {
  id: string;
  item_id: string;
  sentence: string;
  score_mint: number;
  score_chocolate: number;
  score: number;
  user_info: UserInfo;
  created_at: Date;
  updated_at: Date;
};

export type TPostReview = Pick<
  TReview,
  'item_id' | 'sentence' | 'score_mint' | 'score_chocolate' | 'score'
>;

export type TReviewValidate = Pick<TReview, 'sentence'>;

export type TItemValidateError = Record<keyof TReview, string>;

export type DBReviewObj = Omit<TReview, 'id'>;

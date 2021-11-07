import { TReview } from '../types/Review';

export const REVIEW: TReview = {
  id: '',
  item_id: '',
  sentence: '',
  score_mint: 0,
  score_chocolate: 0,
  score: 0,
  user_info: {
    id: '',
    name: '',
  },
  created_at: new Date(),
  updated_at: new Date(),
};

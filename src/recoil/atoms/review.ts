import { atom } from 'recoil';
import { TReview } from '../../types/Review';

export const reviewsState = atom<TReview[]>({
  key: 'reviewsState',
  default: [],
});

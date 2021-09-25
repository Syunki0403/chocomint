import { TReview, TPostReview } from '../../types/Review';
import { validBlank } from '../index';

export const postReviewValidate = <T>(values: TPostReview, errors: TReview): T => {
  // レビュー文
  if ('sentence' in values) {
    if (validBlank.check(values.sentence)) {
      errors.sentence = validBlank.message('レビュー');
    }
  }

  return errors as any;
};

import { TItemValidateError, TReviewValidate } from '../../types/Review';
import { validBlank } from '../index';

export const postReviewValidate = <T>(values: TReviewValidate, errors: TItemValidateError): T => {
  // レビュー文
  if ('sentence' in values) {
    if (validBlank.check(values.sentence)) {
      errors.sentence = validBlank.message('レビュー');
    }
  }

  return errors as any;
};

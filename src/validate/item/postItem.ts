import { TPostItemError, TPostItem } from '../../types/Item';
import { validBlank, periodCheck } from '../index';

export const postItemValidate = <T>(values: TPostItem, errors: TPostItemError): T => {
  // 名前
  if ('name' in values) {
    if (validBlank.check(values.name)) {
      errors.name = validBlank.message('名前');
    }
  }
  // 価格
  if ('price' in values) {
    if (validBlank.check(values.price)) {
      errors.price = validBlank.message('価格');
    }
  }
  // 販売店
  if ('shops' in values) {
    if (validBlank.check(values.shops)) {
      errors.shops = validBlank.message('販売店');
    }
  }
  // 販売期間
  if ('period_start' in values && 'period_end' in values) {
    if (
      values.period_start &&
      values.period_end &&
      periodCheck.check(values.period_start, values.period_end)
    ) {
      errors.period_start = periodCheck.message();
    }
  }

  return errors as any;
};

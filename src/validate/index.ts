import { blank, maxNum, format, passwordRangeAndHankakuEngNum, hankakuEngNum } from './message';
import { validEmail, validHankakuEngNum } from './regExp';

// 空確認
export const validBlank = {
  check: (value: string | number | Date | null): boolean => {
    return value === '' || value === null;
  },
  message: (label: string) => blank(label),
};

// 最大値確認
export const validMaxNum = {
  check: (value: string | null, num: number): boolean => {
    if (value === null) return false;
    return value.length > num;
  },
  message: (label: string, num: number) => maxNum(label, num),
};

// 値の範囲確認
export const validRange = {
  check: (value: string, minNum: number, maxNum: number): boolean => {
    return (value.length !== 0 && value.length < minNum) || value.length > maxNum;
  },
  message: (label: string) => passwordRangeAndHankakuEngNum(label),
};

// 半角確認
export const validhankakuEngNum = {
  check: (value: string): boolean => {
    return !validHankakuEngNum.test(value) && value.length !== 0;
  },
  message: (label: string) => hankakuEngNum(label),
};

// メールフォーマット確認
export const emailFormat = {
  check: (email: string): boolean => {
    return email !== '' && !validEmail.test(email);
  },
  message: (label: string) => format(label),
};

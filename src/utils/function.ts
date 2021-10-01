// Date型をyyyy-MM-dd形式に変換
export const changeYMD = (date: Date) => {
  const y = date.getFullYear();
  const m = ('00' + (date.getMonth() + 1)).slice(-2);
  const d = ('00' + date.getDate()).slice(-2);
  const result = y + '-' + m + '-' + d;
  return result;
};

// 値段を文字列表記に変換
export const PriceToYen = (price: number) => {
  return price.toLocaleString() + '円';
};

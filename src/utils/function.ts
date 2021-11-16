/* recoil */
import { useRecoilValue } from 'recoil';
import { itemListState } from '../recoil/atoms/item';

// Date型をyyyy-MM-dd形式に変換
export const changeYMD = (date: Date) => {
  const y = date.getFullYear();
  const m = ('00' + (date.getMonth() + 1)).slice(-2);
  const d = ('00' + date.getDate()).slice(-2);
  const result = y + '-' + m + '-' + d;
  return result;
};

// 値段を文字列表記に変換
export const priceToYen = (price: number) => {
  return price.toLocaleString() + '円';
};

// recoilのitemListから任意のIDのitemを抽出
// export const GetItemFilteredId = (id: string) => {
//   console.log('test2');
//   const itemList = useRecoilValue(itemListState);
//   console.log('test3');
//   return itemList.find((item) => item.id === id);
// };

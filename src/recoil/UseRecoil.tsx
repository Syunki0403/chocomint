import React, { useEffect } from 'react';
import { getItemList } from '../modules/item';
import { getReviews } from '../modules/review';
/* recoil */
import { useRecoilState } from 'recoil';
import { itemListState } from '../recoil/atoms/item';
import { reviewsState } from '../recoil/atoms/review';

const UseRecoil = () => {
  const [itemList, setItemList] = useRecoilState(itemListState);
  const [reviews, setReviews] = useRecoilState(reviewsState);

  useEffect(() => {
    // itemList取得・格納
    if (itemList.length === 0) {
      const resItemList = getItemList();
      resItemList.then((res) => {
        if (res) setItemList(res);
      });
    }

    // reviews取得・格納
    if (reviews.length === 0) {
      const resReviews = getReviews();
      resReviews.then((res) => {
        if (res) setReviews(res);
      });
    }
  }, []);

  return <></>;
};

export default UseRecoil;

import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
import { BaseButton, BaseSwiper } from '../../../uiParts/index';

const ItemInfo = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const items = [
    'https://firebasestorage.googleapis.com/v0/b/chocomint-c4a70.appspot.com/o/1f1b84b1.jpg?alt=media&token=06680ba9-77cd-4ea3-85ed-34f011929b63',
    'https://firebasestorage.googleapis.com/v0/b/chocomint-c4a70.appspot.com/o/sdfa.jpg?alt=media&token=b1664d31-404d-4f8b-9726-bb6235c796dc',
    'https://firebasestorage.googleapis.com/v0/b/chocomint-c4a70.appspot.com/o/sub1-20.jpg?alt=media&token=5cffa879-f1b4-42ca-a790-ee92ba4cb344',
  ];

  return (
    <div className="md:8/10 mx-auto my-6 w-9/10 md:my-10">
      <p className="mb-4 text-right text-sm md:text-base">投稿者：ユーザー名</p>
      <div className="md:flex md:justify-between">
        <div className="mb-2 md:w-1/2">
          {mounted && (
            <MediaQuery query="(max-width: 767px)">
              <p className="text-lg font-bold">商品名</p>
            </MediaQuery>
          )}
          <div className="h-30 py-30">
            <BaseSwiper items={items} pagination={true} />
          </div>
        </div>
        <div className="mt-5 w-full md:mt-0 md:w-9/20">
          {mounted && (
            <MediaQuery query="(min-width: 768px)">
              <p className="mb-6 text-3xl">商品名</p>
            </MediaQuery>
          )}
          <div className="mb-3">
            <p className="font-bold">価格</p>
            <p>￥1200</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">販売店</p>
            <p>ファミリーマート</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">ミント感</p>
            <span className="star5_rating" data-rate="3"></span>
          </div>
          <div className="mb-3">
            <p className="font-bold">チョコ感</p>
            <span className="star5_rating" data-rate="0"></span>
            <p></p>
          </div>
          <div className="mb-3">
            <p className="font-bold">評価</p>
            <span className="star5_rating" data-rate="5"></span>
            <p></p>
          </div>
          <div className="mb-3">
            <p className="font-bold">補足</p>
            <p>
              ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center md:mt-16">
        <BaseButton>レビューする</BaseButton>
      </div>
    </div>
  );
};

export default ItemInfo;

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MediaQuery from 'react-responsive';
import { DB_ITME } from '../../../../const/item';
/* modules */
import { getItem } from '../../../../modules/item';
/* components */
import { BaseButton, BaseSwiper } from '../../../uiParts/index';
/* utils */
import { priceToYen } from '../../../../utils/function';
/* types */
import { DBItemObj } from '../../../../types/Item';

type TProps = {
  id: string;
};

const ItemInfo = ({ id }: TProps) => {
  const [mounted, setMounted] = useState(false);
  const [item, setItem] = useState<DBItemObj>(DB_ITME);

  // idが取得されてセットされたら処理される
  useEffect(() => {
    if (id) {
      getItem(id).then((itemDoc) => {
        if (itemDoc) {
          const item = itemDoc as DBItemObj;
          setItem(item);
        }
      });
    }
  }, [id]);

  useEffect(() => {
    setMounted(true);
  }, [item]);

  return (
    <div className="md:8/10 mx-auto my-6 w-9/10 md:my-10">
      <p className="mb-4 text-right text-sm md:text-base">投稿者：{item.user_info.name}</p>
      <div className="md:flex md:justify-between">
        <div className="mb-2 md:w-1/2">
          {mounted && (
            <MediaQuery query="(max-width: 767px)">
              <p className="text-lg font-bold">{item.name}</p>
            </MediaQuery>
          )}
          <div className="h-30 py-30">
            <BaseSwiper items={item.images} pagination={true} />
          </div>
        </div>
        <div className="mt-5 w-full md:mt-0 md:w-9/20">
          {mounted && (
            <MediaQuery query="(min-width: 768px)">
              <p className="mb-6 text-3xl">{item.name}</p>
            </MediaQuery>
          )}
          <div className="mb-3">
            <p className="font-bold">価格</p>
            <p>{priceToYen(item.price)}</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">販売店</p>
            <p>{item.shops}</p>
          </div>
          <div className="mb-3">
            <p className="font-bold">ミント感</p>
            <span className="star5_rating" data-rate={item.score_mint}></span>
          </div>
          <div className="mb-3">
            <p className="font-bold">チョコ感</p>
            <span className="star5_rating" data-rate={item.score_chocolate}></span>
          </div>
          <div className="mb-3">
            <p className="font-bold">評価</p>
            <span className="star5_rating" data-rate={item.score}></span>
          </div>
          <div className="mb-3">
            <p className="font-bold">補足</p>
            <p>{item.supplement}</p>
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

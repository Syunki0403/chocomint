import React from 'react';
import Link from 'next/link';
/* components */
import { BaseMediaCard } from '../../uiParts/index';

const RecommendItems = () => {
  return (
    <div className="home-contents_component-wrap">
      <div className="home-contents_component">
        <h2>話題のチョコミント</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <BaseMediaCard
            className="md:w-3/10 w-full"
            description="PABLO mini チョコミント"
            image="https://image.faspa.epark.jp/shop_data/cake-takeout-sweetsguide/images/material/F10295251000001_item06.jpg"
            isShowButton={false}
          />
          <div className="py-4 md:p-0"></div>
          <BaseMediaCard
            className="md:w-3/10 w-full"
            description="PABLO mini チョコミント"
            image="https://image.faspa.epark.jp/shop_data/cake-takeout-sweetsguide/images/material/F10295251000001_item06.jpg"
            isShowButton={false}
          />
          <div className="py-4 md:p-0"></div>
          <BaseMediaCard
            className="md:w-3/10 w-full"
            description="PABLO mini チョコミント"
            isShowButton={false}
          />
        </div>
        <div className="mt-8 text-right md:mt-10">
          <Link href="/">
            <a>もっと見る</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendItems;

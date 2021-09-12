import React from 'react';
import { BaseMediaCard } from '../../uiParts/index';

const ItemList = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-between mx-auto my-6 w-8/10 md:justify-start">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="3xl:w-1/4 w-9/20 md:w-1/3">
            <BaseMediaCard
              className="mb-10 mx-auto w-full"
              imgClassName="sp-cardimg_size"
              title="PABLO mini チョコミント"
              description="チョコレートチーズタルトをこんがりと焼き上げ、ミントホイップクリームを絞りました。仕上げにくるんとカールしたチョコチップをあしらいました。爽快な香りのペパーミントホイップクリームとトロリととろけるチョコレートチーズタルトの味わいで、濃厚かつスッキリとした清涼感を同時にお楽しみいただけます。"
              image="https://image.faspa.epark.jp/shop_data/cake-takeout-sweetsguide/images/material/F10295251000001_item06.jpg"
              isShowButton={false}
            />
          </div>
        ))}
      </div>
      {/* ページネーションは保留 */}
      {/* <div className="flex justify-center mb-10">
        <BasePagination
          count={10}
          siblingCount={1}
          page={currentPage}
          hideButton={true}
          onChange={handlePageChange}
        />
      </div> */}
    </div>
  );
};

export default ItemList;

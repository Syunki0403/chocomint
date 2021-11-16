import React from 'react';
import { BaseMediaCard } from '../../uiParts/index';
import Router from 'next/router';
/* recoil */
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { itemListState, itemState } from '../../../recoil/atoms/item';
/* types */
import { TItem } from '../../../types/Item';

const ItemList = () => {
  const itemList = useRecoilValue(itemListState);
  const setRecoItem = useSetRecoilState(itemState);

  const handleCardClick = (item: TItem) => {
    setRecoItem(item);
    Router.push('/items/[id]', '/items/' + item.id);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between mx-auto my-6 w-8/10 md:justify-start">
        {itemList.map((item, i) => (
          <div key={i} className="3xl:w-1/4 w-9/20 md:w-1/3">
            <BaseMediaCard
              className="mb-10 mx-auto w-full"
              imgClassName="sp-cardimg_size"
              title={item.name}
              image={item.images[0]}
              isShowButton={false}
              onClick={() => handleCardClick(item)}
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

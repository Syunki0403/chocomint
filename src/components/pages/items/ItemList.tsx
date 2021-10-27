import React, { useEffect } from 'react';
import { BaseMediaCard } from '../../uiParts/index';
import { getItemList } from '../../../modules/item';
/* recoil */
import { useRecoilState } from 'recoil';
import { itemListState } from '../../../recoil/atoms/item';

const ItemList = () => {
  const [itemList, setItemList] = useRecoilState(itemListState);

  useEffect(() => {
    const resItemList = getItemList();

    resItemList.then((res) => {
      if (res) {
        setItemList(res);
      }
    });
  }, []);

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

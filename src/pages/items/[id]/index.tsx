import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
/* components */
import { CommonWrapTemplate } from '../../../components/layout/index';
import { BaseDivider } from '../../../components/uiParts/index';
import { ItemInfo, ItemReview } from '../../../components/pages/items/itemDetails/index';

const ItemDetails = () => {
  const [id, setId] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    // idがqueryで利用可能になったら処理される
    if (router.asPath !== router.route) {
      if (router.query.id) {
        if (Array.isArray(router.query.id)) {
          setId(router.query.id[0]);
        } else {
          setId(router.query.id);
        }
      }
    }
  }, [router]);

  return (
    <CommonWrapTemplate>
      <ItemInfo id={id} />
      <BaseDivider />
      <ItemReview id={id} />
    </CommonWrapTemplate>
  );
};

export default ItemDetails;

import React, { useEffect } from 'react';
/* components */
import { CommonWrapTemplate } from '../../components/layout/index';
import { SearchItems, ItemList } from '../../components/pages/items/index';
import { BaseDivider } from '../../components/uiParts/index';
/* customeHook */
import { useSnackbarAction } from '../../customeHook/index';
import { useSelector } from 'react-redux';

const Items: React.FC = () => {
  const snackbarAction = useSnackbarAction();
  const stateSnack = useSelector((state: any) => state.snackbarState);

  useEffect(() => {
    console.log(JSON.stringify(stateSnack));
  }, [stateSnack]);

  return (
    <CommonWrapTemplate {...{ snackbarAction }}>
      <SearchItems />
      <BaseDivider />
      <ItemList />
    </CommonWrapTemplate>
  );
};

export default Items;

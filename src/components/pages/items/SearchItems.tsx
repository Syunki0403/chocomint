import React, { useState, useEffect } from 'react';
import MediaQuery from 'react-responsive';
/* components */
import { BaseTextField, BaseSelectField, BaseButton } from '../../uiParts/index';
/* material-ui */
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const SearchItems = () => {
  const [searchItem, setSearchItem] = useState('');
  const [selectMenu, setSelectMenu] = useState('new');
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const menu = [
    {
      value: 'new',
      label: '新着順',
    },
    {
      value: 'popular',
      label: '人気の高い順',
    },
    {
      value: 'rating',
      label: '評価の高い順',
    },
  ];

  const handleMenuChange = (event: React.ChangeEvent<{ value: string }>) => {
    setSelectMenu(event.target.value);
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(event.target.value);
  };

  return (
    <div className="block mx-auto my-6 w-8/10 md:flex md:flex-row-reverse md:items-center md:justify-center">
      {mounted && (
        <MediaQuery query="(min-width: 768px)">
          <div>
            <BaseButton>検索</BaseButton>
          </div>
        </MediaQuery>
      )}
      <div className="md:ml-14 md:mr-8">
        <BaseTextField
          className="max-w-md md:w-screen"
          id="item-search"
          onChange={onChangeSearch}
          value={searchItem}
          fullWidth={true}
          placeholder="商品名"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="mt-5 md:mt-0">
        <BaseSelectField id="sort" menu={menu} onChange={handleMenuChange} value={selectMenu} />
      </div>
    </div>
  );
};

export default SearchItems;

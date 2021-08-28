import React, { useState } from 'react';
import styled from 'styled-components';
/* reducks */
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../reducks/slices/user';
import { UserState } from '../reducks/slices/user';
/* types */
import { TUser } from '../types/User';
/* components */
import { FirstViewPC } from '../components/pages/home/index';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<TUser>();
  const { userState } = useSelector((state: { userState: UserState }) => state);

  const onClickCreate = () => {
    if (state !== undefined) {
      dispatch(userSlice.actions.createUser(state));
    }
  };

  return (
    <div>
      <FirstViewPC />
    </div>
  );
};

export default Home;

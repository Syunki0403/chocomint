import React, { useState } from 'react';
import styled from 'styled-components';
/* reducks */
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../reducks/slices/user';
import { UserState } from '../reducks/slices/user';
/* types */
import { TUser } from '../types/User';

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
      <p>Reduxのtest</p>
      <p>{userState.user.id}</p>
      <p>{userState.user.name}</p>
      <p>{userState.user.email}</p>
      <p>{userState.user.password}</p>
    </div>
  );
};

export default Home;

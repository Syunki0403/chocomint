import React, { useEffect } from 'react';
import { getItem } from 'src/modules/item';
import { getReview } from 'src/modules/review';
import { getUser } from 'src/modules/user';
import Auth from './Auth';

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    const user = getUser();
    // const item = getItem();
    const review = getReview();
    console.log(user, '________user');
    // console.log(item, '________item');
    console.log(review, '________review');
  }, []);

  return (
    <div>
      <Auth />
    </div>
  );
};

export default FirebaseTest;

import React, { useEffect, useState } from 'react';
import { getItem } from 'src/modules/item';
import { getReview } from 'src/modules/review';
import { getUser } from 'src/modules/user';

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    const user = getUser();
    const item = getItem();
    const review = getReview();
    console.log(user, '________user');
    console.log(item, '________item');
    console.log(review, '________review');
  }, []);

  return <div>aaaaaa</div>;
};

export default FirebaseTest;

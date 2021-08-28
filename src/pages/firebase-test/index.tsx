import React, { useEffect, useState } from 'react';
import { getUser } from 'src/modules/user';

const FirebaseTest: React.FC = () => {
  useEffect(() => {
    const user = getUser();
    console.log(user, '________user');
  }, []);

  return <div>aaaaaa</div>;
};

export default FirebaseTest;

import React from 'react';
import Image from 'next/image';

const FirstViewPC = () => {
  const logo = require('../../../image/logo_transparent.png');
  return (
    <div className="firstview-section">
      <div className="firstview-section_contents">
        <h1 className="text-center font-rockone">チョコミント商品共有サイト</h1>
        <div className="-mt-10 text-center">
          <Image src={logo} alt="ロゴ" width={460} height={460} />
        </div>
      </div>
    </div>
  );
};

export default FirstViewPC;

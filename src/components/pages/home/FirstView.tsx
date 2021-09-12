import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import MediaQuery from 'react-responsive';
import { BaseButton } from '../../uiParts/index';
/* images */
import logo from '/public/images/logo_transparent.png';

const FirstView = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="firstview-section">
      <div className="firstview-section_contents">
        <h1 className="firstview-section_contents_text text-center font-rockone">
          チョコミント商品共有サイト
        </h1>
        <div className="firstview-section_contents_img -mt-8 text-center">
          <Image src={logo} alt="ロゴ" width={40} height={40} layout="responsive" />
        </div>
        {mounted && (
          <MediaQuery query="(max-width: 767px)">
            <div className="flex justify-between mt-0 mx-auto w-4/5">
              <BaseButton color="white">検索する</BaseButton>
              <BaseButton color="white">投稿する</BaseButton>
            </div>
          </MediaQuery>
        )}
      </div>
    </div>
  );
};

export default FirstView;

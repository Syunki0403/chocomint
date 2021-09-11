import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MediaQuery from 'react-responsive';
import { BaseButton } from '../../uiParts/index';
/* images */
import chocomintTopImg from '/public/images/chocomint_top.jpg';
import chocomintIceImg from '/public/images/chocomint_ice.png';

const ChocomintKatsu = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="home-contents_component-wrap">
      <div className="home-contents_component component_chocomint-katsu">
        {mounted && (
          <MediaQuery query="(min-width: 768px)">
            <div className="component_chocomint-katsu_pc">
              <div className="w-1/3">
                <Image src={chocomintIceImg} alt="" width={460} height={460} layout="responsive" />
              </div>
              <div className="pl-5">
                <h2>チョコミント活してみませんか？</h2>
                <p>
                  商品の投稿やレビューをしてあなたの持つチョコミントの情報を発信してみませんか？
                  <br />
                  あなたの投稿やレビューにより救われるチョコミン党がいます。是非、ご協力ください。
                </p>
                <div className="mt-6 text-center">
                  <BaseButton color="mint" className="p-8 text-xl font-bold">
                    チョコミント活をする
                  </BaseButton>
                </div>
              </div>
            </div>
          </MediaQuery>
        )}
        {mounted && (
          <MediaQuery query="(max-width: 767px)">
            <div className="component_chocomint-katsu_sp">
              <Link href="/">
                <a>
                  <div className="component_chocomint-katsu_img relative">
                    <Image src={chocomintTopImg} alt="チョコミント活" />
                  </div>
                  <p className="component_chocomint-katsu_text1">
                    チョコミント活
                    <br />
                    してみませんか？
                  </p>
                  <p className="component_chocomint-katsu_text2">
                    商品の投稿やレビューをしてチョコミント活を！
                    <br />
                    あなたの持つチョコミント情報を募集しています！
                  </p>
                </a>
              </Link>
            </div>
          </MediaQuery>
        )}
      </div>
    </div>
  );
};

export default ChocomintKatsu;

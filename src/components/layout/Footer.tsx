import React from 'react';
import Image from 'next/image';
import logo from '/public/images/logo_transparent.png';

const Footer = () => {
  return (
    <div className="p-2 text-center" style={{ background: '#68e8d8' }}>
      <Image src={logo} alt="ロゴ" width={120} height={120} className="img-noBlurred mx-2" />
      <div className="flex justify-center mb-6">
        <p className="cursor-pointer">検索 |</p>
        <p className="cursor-pointer">お問い合わせ |</p>
        <p className="cursor-pointer">プライバシーポリシー</p>
      </div>
    </div>
  );
};

export default Footer;

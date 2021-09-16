import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

SwiperCore.use([Navigation, Pagination]);

type TBaseSwiper = {
  className?: string;
  items: string[];
  pagination?: boolean;
  navigation?: boolean;
};

const BaseSwiper = ({
  className = '',
  items,
  pagination = false,
  navigation = false,
}: TBaseSwiper) => {
  return (
    <Swiper className={className} pagination={pagination} navigation={navigation}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <Image src={item} alt="" width={900} height={590} className="img-noBlurred" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BaseSwiper;

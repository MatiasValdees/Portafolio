import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';

import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import {getLanguages} from '../../services/getLanguages'
import {Card} from '../Card/Card'


export const Carousel = () => {
    const [languages,setLanguages]=useState([]);
    useEffect(()=>{
        const data=getLanguages();
        setLanguages(data)
    },[])


  return (
    <>
      <div className="container-carousel">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
                    {
                languages.map((language)=>(
                    <SwiperSlide key={language.name}>
                        <Card key={language.id} language={language}/>
                    </SwiperSlide>

                ))
            }
      </Swiper>
      </div>
    </>
  );
}

"use client"
import React from 'react'
import "./Hero.scss"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import hero from "@/assets/hero.png"
import Image from 'next/image';

function Sale() {
    return (
        <main>
            <section className='hero'>
        <div className="container-big">
        <Swiper
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        >
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <Image src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <Image src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero__wrapper">
                <div className="hero__text">
                    <p className='hero__title'>Скидка 15% на все подвесные светильники </p>
                    <button className='hero__btn'>до 5 февраля</button>
                </div>
                <div className="hero__img">
                    <Image src={hero} alt="" />
                </div>
            </div>
        </SwiperSlide>
      </Swiper>        
        </div>
            </section>
            </main>
    )
}


export default React.memo(Sale) 
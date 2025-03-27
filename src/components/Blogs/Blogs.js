import React from 'react'
import './Blogs.scss'
import home from "@/assets/home.png"
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

function Blogs() {
  return (
    <main>
        <section className="blog">
            <div className="container">
                <div className="blog__tops">
                    <Link href={"/"}>
                      <p className='blog__word'>Главная</p>
                    </Link>
                    <IoIosArrowForward/>
                    <Link href={"/"}>
                      <p className='blog__word'>Блог</p>
                    </Link>
                </div>
                <div className="blog__top">
                    <h2>Блог</h2>
                </div>
                <div className="blog__wrapper">
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                    <div className="blog__item">
                        <Image className='img' src={home} alt=''/>
                        <div className="blog__text">
                            <p>Как правильно освещать дом снаружи?</p>
                            <GoArrowUpRight/>
                        </div>
                        <p className='blog__date'>07.07.2025</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Blogs
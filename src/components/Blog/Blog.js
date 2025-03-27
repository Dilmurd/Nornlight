import React from 'react'
import './Blog.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import home from "@/assets/home.png"
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";

function Blog() {
  return (
    <main>
        <section className="blog">
            <div className="container">
                <div className="blog__top">
                    <h2>Блог</h2>
                    <button>Перейти в блог <FaLongArrowAltRight/></button>
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
                </div>
            </div>
        </section>
    </main>
  )
}

export default Blog
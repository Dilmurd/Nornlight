import React from 'react'
import "./Blog.scss"
import { FaArrowRight } from 'react-icons/fa'
import hm from "@/assets/home.png"
import Image from 'next/image'


function Blog() {
  return (
    <main>
        <section className='blog'>
            <div className="container">
                <div className="blog__top">
                    <p className='blog__title'>Блог</p>
                    <div className='btns'>
                        <p className='inf'>Перейти в блог</p>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className="blog__wrapper">
                    <div className="blog__card">
                        <div className='blog__img'>
                            <Image src={hm} alt="" />
                        </div>
                        <div className='blog__text'>
                            <p className='blog__inf'>Как правильно освещать дом снаружи?</p>
                            <p className='blog__data'>01.01.2024</p>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className='blog__img'>
                            <Image src={hm} alt="" />
                        </div>
                        <div className='blog__text'>
                            <p className='blog__inf'>Как правильно освещать дом снаружи?</p>
                            <p className='blog__data'>01.01.2024</p>
                        </div>
                    </div>
                    <div className="blog__card">
                        <div className='blog__img'>
                            <Image src={hm} alt="" />
                        </div>
                        <div className='blog__text'>
                            <p className='blog__inf'>Как правильно освещать дом снаружи?</p>
                            <p className='blog__data'>01.01.2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default React.memo(Blog) 
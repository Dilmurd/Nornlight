import React from 'react'
import "./Company.scss"
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import Link from 'next/link';

function Company() {
  return (
    <main>
        <section className='company'>
            <div className="container">
                <div className="company__top">
                    <p>Почему NORNLIGHT?</p>
                    <Link href={"/about"}>
                    <button>О компании <FaLongArrowAltRight/></button>
                    </Link>
                </div>
                <div className="company__wrapper">
                    <div className="company__card">
                        <button><FaAward/></button>
                        <p className='company__title'>Только проверенные бренды</p>
                        <p className='company__desc'>Бренды, проверенные временем и качеством</p>
                    </div>
                    <div className="company__card">
                        <button><FaAward/></button>
                        <p className='company__title'>Только проверенные бренды</p>
                        <p className='company__desc'>Бренды, проверенные временем и качеством</p>
                    </div>
                    <div className="company__card">
                        <button><FaAward/></button>
                        <p className='company__title'>Только проверенные бренды</p>
                        <p className='company__desc'>Бренды, проверенные временем и качеством</p>
                    </div>
                    <div className="company__card">
                        <button><FaAward/></button>
                        <p className='company__title'>Только проверенные бренды</p>
                        <p className='company__desc'>Бренды, проверенные временем и качеством</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Company
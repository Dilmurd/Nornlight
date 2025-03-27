import React from 'react'
import './Products.scss'
import { FaLongArrowAltRight } from "react-icons/fa";
import lustraa from "@/assets/lustraa.png"
import Image from 'next/image';
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

async function Products() {
    
  return (
    <main>
        <section className='products'>
            <div className="container">
            <div className="products__top">
                <h1>Популярные товары</h1>
                <button>Все товары <FaLongArrowAltRight/></button>
            </div>
            <div className="products__wrapper">
                <div className="products__item">
                    <div className="products__img">
                        <Image src={lustraa} alt=""/>
                    </div>
                        <div className="products__icon">
                        <FaRegHeart/>
                        </div>
                    <p className='products__title'>Встраиваемый светильник Novotech</p>
                    <div className="products__price">
                    <del>7 000₽</del>
                    <p>6 399₽</p>
                    </div>
                    <div className='pro__icon'>
                    <button><MdOutlineShoppingCart/></button>
                    </div>
                </div>
                <div className="products__item">
                    <div className="products__img">
                        <Image src={lustraa} alt=""/>
                    </div>
                        <div className="products__icon">
                        <FaRegHeart/>
                        </div>
                    <p className='products__title'>Встраиваемый светильник Novotech</p>
                    <div className="products__price">
                    <del>7 000₽</del>
                    <p>6 399₽</p>
                    </div>
                    <div className='pro__icon'>
                    <button><MdOutlineShoppingCart/></button>
                    </div>
                </div>
                <div className="products__item">
                    <div className="products__img">
                        <Image src={lustraa} alt=""/>
                    </div>
                        <div className="products__icon">
                        <FaRegHeart/>
                        </div>
                    <p className='products__title'>Встраиваемый светильник Novotech</p>
                    <div className="products__price">
                    <del>7 000₽</del>
                    <p>6 399₽</p>
                    </div>
                    <div className='pro__icon'>
                    <button><MdOutlineShoppingCart/></button>
                    </div>
                </div>
                <div className="products__item">
                    <div className="products__img">
                        <Image src={lustraa} alt=""/>
                    </div>
                        <div className="products__icon">
                        <FaRegHeart/>
                        </div>
                    <p className='products__title'>Встраиваемый светильник Novotech</p>
                    <div className="products__price">
                    <del>7 000₽</del>
                    <p>6 399₽</p>
                    </div>
                    <div className='pro__icon'>
                    <button><MdOutlineShoppingCart/></button>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </main>
  )
}

export default Products
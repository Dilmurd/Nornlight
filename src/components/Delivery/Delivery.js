import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import "./Delivery.scss"

function Delivery() {
  return (
    <main>
        <section className="delivery">
            <div className="container">
                <div className="delivery__top">
                    <Link href={"/"}>
                        <p className="delivery__word">Главная</p>
                    </Link>
                    <IoIosArrowForward/>
                    <Link href={"/"}>
                        <p className="delivery__word">Доставка и оплата</p>
                    </Link>
                </div>
                <div className="delivery__wrapper">
                    <div className="delivery__left">
                        <p className='delivery__title'>Доставка и оплата</p>
                    </div>
                    <div className="delivery__right">
                        <div className="delivery__text">
                            <p className="delivery__subtitle">Доставка</p>
                            <p className="delivery__desc">Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
                        </div>
                        <div className="delivery__text">
                            <p className="delivery__subtitle">Курьерская доставка</p>
                            <p className="delivery__desc">БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
                        </div>
                        <div className="delivery__text">
                            <p className="delivery__subtitle">Самовывоз</p>
                            <p className="delivery__desc">Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Delivery
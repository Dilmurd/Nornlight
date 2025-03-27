import React from 'react'
import "./Contact.scss"
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

function Contact() {
  return (
    <main>
        <section className="contact">
            <div className="container">
                <div className="contact__top">
                    <Link href={"/"}>
                    <p>Главная</p>
                    </Link>
                    <IoIosArrowForward/>
                    <Link href={"/"}>
                    <p>Контакты</p>
                    </Link>
                </div>
                <div className="contact__item">
                    <h2>Контакты</h2>
                    <div className="contact__num">
                        <h3>8 (800) 890-46-56</h3>
                        <h4>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину
                        Телефоны: </h4>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Contact
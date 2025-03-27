import React from "react";
import "./Companyy.scss";
import { IoIosArrowForward } from "react-icons/io";

function Companyy() {
  return (
    <main>
      <section className="com">
        <div className="container">
          <div className="com__top">
            <a href="/" className="com__word">
              Главная
            </a>
            <IoIosArrowForward />
            <a href="/about" className="com__word">
              О компании
            </a>
          </div>
          <div className="com__wrapper">
            <div className="com__left">
              <h2>О компании</h2>
              <div className="com__wrapp">
                <div className="com__texts">
                  <p className="com__num">170+ </p>
                  <p className="com__title">Товаров</p>
                </div>
                <div className="com__texts">
                  <p className="com__num">170+ </p>
                  <p className="com__title">Товаров</p>
                </div>
                <div className="com__texts">
                  <p className="com__num">170+ </p>
                  <p className="com__title">Товаров</p>
                </div>
              </div>
            </div>
            <div className="com__right">
              <p className="com__desc">
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
              </p>
              <p className="com__desc">
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
              <p className="com__desc">
                Интернет-магазин NORNLIGHT предлагает широкий ассортимент
                светильников для освещения вашего дома или офиса. У нас вы
                найдете разнообразные модели светильников, от современных и
                стильных до классических и элегантных. Мы предлагаем
                качественные и надежные светильники от лучших производителей,
                которые подарят вам комфорт и уют.
              </p>
              <p className="com__desc">
                Покупая светильники в нашем интернет-магазине, вы получаете
                отличное соотношение цены и качества. Мы осуществляем доставку
                по всей России, чтобы каждый клиент мог насладиться прекрасным
                светом и удобством покупки онлайн. Обратитесь к нам сегодня и
                превратите ваш дом в оазис тепла и света с NORNLIGHT!
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Companyy;

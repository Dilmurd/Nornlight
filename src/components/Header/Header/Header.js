import React from "react";
import "./Header.scss";
import navbar from "@/assets/navbar.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__top">
            <ul className="navbar__collection">
              <li>
                <a href="/about">
                  <span>О компании</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Доставка и оплата</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Возврат</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Гарантии</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Контакты</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>Блог</span>
                </a>
              </li>
            </ul>
            <div className="navbar__contacts">
              <p>8 (800) 890-46-56</p>
              <p>Заказать звонок</p>
            </div>
          </div>
          <div className="navbar__bottom">
            <div className="navbar__logo">
              <Image src={navbar} alt="" />
              <a href="/">
              <p className="navbar__title">NORNLIGHT</p>
              </a>
              <div className="navbar__cat">
                <button><GiHamburgerMenu/> Каталог</button>
              </div>
            <form action="">
                <input type="search" placeholder="Поиск по товарам"/>
                <FaSearch/>
            </form>
            <div className="navbar__icons">
                <div className="navbar__icon">
                    <FaRegHeart/>
                    <span>Избранное</span>
                </div>                
                <div className="navbar__icon">
                    <TbAntennaBars5/>
                    <span>Сравнение</span>
                </div>                
                <div className="navbar__icon">
                    <FiShoppingCart/>
                    <span>Корзина</span>
                </div>                
            </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

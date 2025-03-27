import React from "react";
import "./Header.scss";
import navbar from "@/assets/navbar.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbAntennaBars5 } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="navbar__top">
            <ul className="navbar__collection">
              <li>
                <Link href={"/about"}>
                  <span>О компании</span>
                </Link>
              </li>
              <li>
                <Link href={"/delivery"}>
                  <span>Доставка и оплата</span>
                </Link>
              </li>
              <li>
                <Link href={"/return"}>
                  <span>Возврат</span>
                </Link>
              </li>
              <li>
                <Link href={"/garranty"}>
                  <span>Гарантии</span>
                </Link>
              </li>
              <li>
                <Link href={"/contacts"}>
                  <span>Контакты</span>
                </Link>
              </li>
              <li>
                <Link href={"/blog"}>
                  <span>Блог</span>
                </Link>
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
              <Link href={"/"}>
              <p className="navbar__title">NORNLIGHT</p>
              </Link>
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
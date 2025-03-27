import React from "react";
import "./Return.scss";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

function Return() {
  return (
    <main>
      <section className="return">
        <div className="container">
          <div className="return__top">
            <Link href={"/"}>
              <p className="return__word">Главная</p>
            </Link>
            <IoIosArrowForward />
            <Link href={"/return"}>
              <p className="return__word">Возврат</p>
            </Link>
          </div>
          <div className="return__wrapper">
            <div className="return__left">
              <h2>Возврат</h2>
            </div>
            <div className="return__right">
              <div className="return__texts">
                <h3>Обмен и возврат по желанию покупателя</h3>
                <p className="return__desc">
                  Если товар по каким-то причинам не подошел вам, вы имеете
                  право вернуть его или обменять на другой в течение 7 дней* с
                  момента покупки при соблюдении следующих условий: 
                </p>
                <div className="return__li">
                  <li>Товар имеет первоначальный вид, имеется товарная кондиция;</li>
                  <li>Товар имеет полную комплектацию, включая упаковочные материалы;</li>
                  <li>Товар не имеет следов подключался и не имеет признаков монтажа;</li>
                  <li>Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;</li>
                  <li>Есть документ, подтверждающий покупку в нашем интернет-магазине.</li>
                  <li>Для возврата товара необходимо привезти к нам в офис.</li>
                  <li>Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании оплачиваются клиентом.</li>
                  <li>B течение 14 дней для отдельных брендов. При оформлении заказа уточните y менеджера</li>
                </div>
              </div>
              <div className="return__texts">
                <h3>Обмен и возврат по ошибке продавца</h3>
                <p className="return__desc">
                  Причины обмена или возврата по ошибке продавца:
                </p>
                <div className="return__li">
                <li>
                  Неполная комплектация товара
                </li>
                <li>
                Брак или дефект товара
                </li>
                <li>
                Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/
                </li>
                <li>
                Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно
                </li>
                </div>
              </div>
              <div className="return__texts">
                <h3>Возврат денежных средств</h3>
                <p className="return__desc">
                Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Return;

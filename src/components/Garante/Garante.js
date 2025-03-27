import React from 'react'
import "./Garante.scss"
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

function Garante() {
  return (
    <main>
        <section className="garant">
            <div className="container">
                <div className="garant__top">
                    <Link href={"/"}>
                       <p>Главная</p>
                    </Link>
                    <IoIosArrowForward/>
                    <Link href={"/"}>
                       <p>Гарантии</p>
                    </Link>
                </div>
                <div className="garant__wrapper">
                    <h2>Гарантии</h2>
                    <div className="garant__right">
                        <h3>Обмен и возврат по желанию покупателя</h3>
                        <div className="garant__texts">
                            <p className='garant__title'>Bcе товары в магазине «NornLight» имеют гарантию. Она заявляется производителеми имеет определенный срок действия на различные группы товаров. Если ваше изделие вышло из строя в течение гарантийного срокавы можете обратиться к нам и получить бесплатный ремонт</p>
                            <p className="garant__subtitle">
                            Для этого нужно:
                            </p>
                            <div className="garant__li">
                            <li>
                            Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.
                            </li>
                            <li>
                            Привезти товар к нам на склад или отправить транспортной компанией.
                            </li>
                            <li>
                            После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.
                            </li>
                            <p className="garant__subtitle">
                            Обращаем внимание, что «А-Свет» не является сервисным центром, a выполняет роль посредника между клиентом и поставщиком. Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Garante
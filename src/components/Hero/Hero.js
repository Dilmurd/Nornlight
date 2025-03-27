import React from 'react'
import Image from "next/image";
import hero from "@/assets/hero.png"
import "./Hero.scss"

function Hero() {
  return (
    <main>
        <section className="hero">
            <div className="container-big">
              <div className="hero__wrapper">
                <div className="hero__text">
                    <p>Скидка 15% на все подвесные светильники до 5 февраля</p>
                    <button>до 5 февраля</button>
                </div>
                <div className="hero__img">
                   <Image src={hero} alt="" />
                </div>
              </div>
            </div>
        </section>
    </main>
  )
}

export default Hero
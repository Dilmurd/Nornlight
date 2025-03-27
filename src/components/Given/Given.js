import Image from 'next/image'
import React from 'react'
import './Given.scss'
import tigr from "@/assets/tigr.png"

function Given() {
  return (
    <main>
        <section className="given">
            <div className="container">
                <h2>Только проверенные бренды</h2>
                <div className="given__wrapper">
                    <div className="given__item">
                        <Image src={tigr} alt=''/>
                    </div>
                    <div className="given__item">
                        <Image src={tigr} alt=''/>
                    </div>
                    <div className="given__item">
                        <Image src={tigr} alt=''/>
                    </div>
                    <div className="given__item">
                        <Image src={tigr} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Given
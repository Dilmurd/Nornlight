import React from 'react'
import "./Given.scss"
import brand from "@/assets/tigr.png"
import Image from 'next/image'

function Brand() {
    return (
        <main>
            <section className="brand">
                <div className="container">
                    <div className="brand__top">
                        <p>Только проверенные бренды</p>
                    </div>
                    <div className="brand__wrapper">
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                        <div className="brand__card">
                            <Image src={brand} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
  )
}

export default React.memo(Brand) 
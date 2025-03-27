import React from 'react'
import "./Map.scss"

function Map() {
  return (
    <main>
        <section className='map'>
            <div className="container-big">
                <div className="map__img">
                <iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </section>
    </main>
  )
}

export default React.memo(Map) 
import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className='primaryText'>Kérdése van?</span>
          <span className='secondaryText'>
            Bármely kérdés esetén állunk rendelkezésére,
            <br />
            Vegye fel a kapcsolatot üzenetben!
          </span>
          <button className="button">
            <a href="mailto:abcd@gmail.com">Írjon Üzenetet!</a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
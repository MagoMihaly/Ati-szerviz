import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side */}
          <div className="flexColStart f-left"> 
            <img src="./1logo.png" alt="" width={120} />
            <span className='secondaryText'>
              Ati Gumiszervíz <br/>
              Legjobb választás Önnek és Autójának!
            </span>
          </div>

        {/* Right side */}
      <div className="flexColStart f-right">
        <span className='primaryText'>Információ</span>
        <span className='secondaryText'>6100, Kiskunfélegyháza Katona József utca</span>
      </div>

      </div>
    </section>
  )
}

export default Footer
import React from 'react'
import './Hero.css'
import CountUp from 'react-countup'
import { motion, spring } from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">

         {/* right side ---------- */}

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{y:"2rem", opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >
                Ati <br/>Autószervíz  <br/>és Gumiszervíz
            </motion.h1>
          </div>

          <div className="flexColStart hero-desc">
            <h3>Várjuk régi és új ügyfeleinket Kiskunfélegyházán</h3>
            <span className='secondaryText'>A nálam megrendelt gumiabroncsokért külön szerelési díjat nem számolok fel!</span>
          </div>

          
          <div className="flexCenter stats">
            
            <div className="flexColCenter stat">
              <span>
                <CountUp start={2800} end={3320} duration={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Kijavítot jármű</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Elégedett ügyfél</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={6}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Éve</span>
            </div>

          </div>

        </div>

        {/* right side ---------- */}

        <div className="flexCenter hero-right">
          <motion.div 
            initial={{x:"7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }} 
            className="image-container">
            <img src="./ati2.jpg" alt="" />
          </motion.div>

        </div>

      </div>
    </div>
  )
}

export default Hero
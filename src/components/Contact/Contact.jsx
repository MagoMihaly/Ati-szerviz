import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'


const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">

        {/* Left side */}
        <div className="flexColStart c-left">
          <span className='orangeText'>Elérhetőségeink</span>
          <span className='primaryText'>Vegye fel velünk a kapcsolatot!</span>
          <span className='secondaryText'>Keressék továbbra is szervizünket bizalommal az alábbi elérhetőségeken:
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/*first element */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Hevér Attila - Autószervíz</span>
                    <span className='secondaryText'>+36202196340</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>

              {/*second element */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Hevér Erik - Klímaszervíz</span>
                    <span className='secondaryText'>+36203959923</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  <a href="tel:+36309789391">Hívjon most!</a>
                </div>
              </div>

            </div>
            <div className="openTimeTable">
              <h3 className='primaryText'>Nyitvatartás</h3>
              <table>
                <tbody>
                  <tr><th>Hétfő</th><td>8:00 - 17:00</td></tr>
                  <tr><th>Kedd</th><td>8:00 - 17:00</td></tr>
                  <tr><th>Szerda</th><td>8:00 - 17:00</td></tr>
                  <tr><th>Csütörtök</th><td>8:00 - 17:00</td></tr>
                  <tr><th>Péntek</th><td>8:00 - 17:00</td></tr>
                  <tr><th>Szombat</th><td>Zárva</td></tr>
                  <tr><th>Vasárnap</th><td>Zárva</td></tr>
                </tbody>
              </table>
            </div>
          </div>


        </div>

        {/* Right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./atiek.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact
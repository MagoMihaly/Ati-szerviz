import React from 'react'

const Gmaps = () => {
  return (
    <div className=" innerWidth flexCenter gmaps">
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.2610565042933!2d19.8441352740401!3d46.7017652385223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4743ebb94306ff8d%3A0x7117d3ca82f35b53!2zQXRpIEd1bWlzemVydsOteiDDqXMgZnV0w7NtxbEgamF2w610w6FzIGZ1dMOzbcWxw6FsbMOtdMOhcyAzZCBtw6lyw6lzdGVjaG5vbMOzZ2nDoXZhbCxhdXTDs3N6ZXJ2w616!5e0!3m2!1shu!2shu!4v1705698521967!5m2!1shu!2shu"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    </div>
  )
}

export default Gmaps
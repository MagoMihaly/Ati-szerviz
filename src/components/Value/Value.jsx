import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
import { useState } from 'react'

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">

        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./klima.jpg" alt="miss img" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">

          <span className='orangeText'>A mi szenvedélyünk,</span>
          <span className='primaryText'>Értéket adunk!</span>
          <span className='secondaryText'>
             Legyen szó átvizsgálásról, időszakos karbantartásról vagy akár egy fékjavításról ránk mindig számíthat!
            <br />
             Bízza ránk járművét, és garantáljuk, hogy biztonságban lesz útjain!
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {
              data.map((item, i) => {
                const [className, setClassName] = useState(null)

                return (
                  <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                    <AccordionItemHeading>
                      <AccordionItemButton className='flexCenter accordionButton'>
                        
                        <span className="primaryText">{item.heading}</span>
                        <div className="flexCenter icon"><MdOutlineArrowDropDown size={20} /></div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="secondaryText">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </div>

      </div>
    </section>
  )
}

export default Value
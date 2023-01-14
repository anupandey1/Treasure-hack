import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/pg1.png'
import img2 from '../assets/pg2.png'
import img3 from '../assets/pg3.png'
import './slides.css'
const carousel = () => {
  return (
    <>
    <div className="pb-10">
      <Carousel className='slide'>
        <div>
        <img src={img1} className="sl"/>
        </div>
        <div>
        <img src={img2} className="sl "/>
        </div>
        <div>
        <img src={img3} className="sl"/>
        </div>
      </Carousel>
      </div>
    </>
  )
}

export default carousel

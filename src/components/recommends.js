import React from 'react'
import Nav from './navbar'
import Image from '../assets/main-image.svg'
import { Link } from "react-router-dom";
const recommends = () => {
  return (
    <>
    <Nav/>
    <div className='front-container flex'>
    <div className='sub-front-container1'>
      <p className='text-4xl text-green-900'>
        Heavy Meal
      </p>
      <p className='text-3xl pt-2'>
       Search for:Rice, Chapati, Biryani, Dosa, etc
      </p>
      <p className='text-4xl text-green-900 pt-8'>
        Light Meal
      </p>
      <p className='text-3xl pt-2'>
       Search for:Salads, Noodles, Wraps, Tofu, Corn, etc
      <p className='text-2xl text-green-900 text-bold py-2'><Link to="/landing">Get Started &rarr;</Link></p>
       </p>
      </div>
      <div>
        <img className='sub-front-container2' src={Image}/>
      </div>
      </div>
    </>
  )
}

export default recommends

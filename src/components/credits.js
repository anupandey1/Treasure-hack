import React from 'react'
import logo from '../assets/Subtract.png'
import Nav from './navbar.js'
const credits = () => {
  return (
    <>
    <Nav/>
    <p className=" homepg py-4 pl-36 text-white text-6xl leading-relaxed font-semibold drop-shadow-2xl">CREDITS.<br/>BY TEAM GALLARDO.<br /></p>
      <div className="homepg py-2 text-white pl-36 text-4xl leading-relaxed flex flex-row justify-between">
        <div className="flex flex-col">
            <p>Anubhuti Pandey</p>
            <p>Debaditya Arnab</p>
            <p>Ayush Kumar</p>
            <p>Khair Alanam</p>
        </div>
            <img className="flex h-[45vh] w-[35vw]" src={logo}/>
        </div>
    </>
  )
}

export default credits

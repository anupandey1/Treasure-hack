import React from 'react'
import logo from '../assets/Subtract.png'
const credits = () => {
  return (
    <>
    <p className=" homepg py-4 pl-36 text-white text-7xl leading-relaxed font-semibold drop-shadow-2xl">CREDITS.<br/>BY TEAM GALLARDO.<br /></p>
      <div className="homepg py-2 text-white pl-36 text-5xl leading-relaxed flex flex-row justify-between">
        <div className="flex flex-col">
            <p>Debaditya Arnab</p>
            <p>Anubhuti Pandey</p>
            <p>Ayush Kumar</p>
            <p>Khair Alanam</p>
        </div>
            <img className="flex h-[45vh] w-[35vw]" src={logo}/>
        </div>
    </>
  )
}

export default credits

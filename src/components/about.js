import React from 'react'
import Nav from './navbar.js'
import { Link } from "react-router-dom";
const about = () => {
  return (
    <>
      <Nav/>
      <div className='bg-gradient-to-r from-slate-100 to-green-100 hue-rotate-60 h-screen'>
      <p className='text-3xl font-semibold'>Hostellers and youngsters often order meals from other sources. They must keep track of the calories and nutritional value of the foods they consume. The intuition of Nutrio lies here.</p> 
      <p className='py-8 text-3xl font-semibold'>NUTRIO asks you to input your favourite food item (i.e., noodles, chapati) and returns you the data of all the available dishes consisting of their total calorie count, diet type (high fibre, balanced, etc.), and nutrition composition (that is, the amount of fats, proteins, and carbohydrates, as well as the level of all micronutrients like sodium, potassium, etc.).</p>
      <p className='text-3xl font-semibold'>In addition, the user can apply the filters to the results by specifying the exact diet category, meal class, preference (vegetarian or non-vegetarian), and cuisine type, allowing them to select from a variety of dishes while keeping an eye on their health.</p>
      <p className='text-2xl text-green-800 font-bold py-2'><Link to="/landing">Get Started &rarr;</Link></p>
      </div>
    </>
  )
}

export default about

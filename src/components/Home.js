import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';

const Home = ({fetchData,handleChange,search,data}) => {
 
  return (
    <>
    <form >
   <input type="text" value={search} onChange={handleChange} />
    <Button onClick={fetchData} variant="contained"><Link to='/result'>ok</Link></Button>
  </form> 
    </>

  )
}

export default Home
import React from 'react'
import './Result.css'

const Result = ({temp,desc,image,setTemp}) => {
  return (
    <div className='result'>
        <div className='result__box'>
            <h1>Temp: {temp}</h1>
            <p>{desc}</p>
            <img src={image} alt="icon" />
            <br/>
            <button className="result__boxButton"type="submit" onClick={()=>setTemp("")}>Back</button> 
        </div>
    </div>
  )
}

export default Result;

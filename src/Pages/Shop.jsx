import React from 'react'
import f1 from '../Images/fragrant1.jpeg'
import f2 from '../Images/fragrant2.jpeg'
import stand from '../Images/Standard ver.jpeg'
import arrowb from '../Images/arrow-down.png'
import prod from '../Images/Products.png'

export default function Shop () {
  return (
  <>
  <div className='header'>
    <div className="center-mid">
      <h1 className="semi-bold"> Our Products</h1>
        <h1 className="seconds"> Shop all
        <button className="arrow-down">
          < img src={arrowb} alt=""/>
          </button>
        </h1>
        
        </div>
    </div>
  <div>
  <img
  className="curly-line"
  src={process.env.PUBLIC_URL + "./images/CurlyLine.png"}
  alt="curlyLine"
        />
  <div className="products">
    <img src ={prod} alt=""/>
  </div>
  <div className= 'head'>
    <h1>Find Your Perfect Fit.</h1>
     <h1 className="button">
      <button className="find-fit">
        Don't know your size </button>
        </h1>
  </div>
    <div className="frag1">
      <img src={f1} alt="" />
    </div>
    <div className="frag2">
        <img src={f2} alt="" />
      </div>
      <div className="standard">
        <img src={stand} alt="" />
      </div>
      
      </div>
      
   
    
  
{'}'}

export default Shop
</> 
  )
}


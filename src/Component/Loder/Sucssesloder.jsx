import React from 'react'
import "./Sucssesloder.css";
export default function Sucssesloder({headers}) {
  return (
    <>
       <div className="loader">
      <div className="wait"> {headers && headers}</div>
      {/* <div className="iata_code departure_city">CDG</div> */}
      <div className="plane">
        <img src="https://zupimages.net/up/19/34/4820.gif" className="plane-img" />
      </div>
      <div className="earth-wrapper">
        <div className="earth"></div>
      </div>  
      {/* <div className="iata_code arrival_city">JFK</div> */}
    </div>
    </>
  )
}

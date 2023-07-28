import React from 'react'
import { Link } from 'react-router-dom'

function Body({flags, name, population, region, capital}) {
  return (
    <Link to ={`/${name.common}`}>
    <div className='country'>
                  <img src={flags.png} alt="" className='img' />
                  <div className='details'>
                      <div className="name">{name.common}</div>
                      <div className="population">Population: {population.toLocaleString()}</div>
                      <div className="region">Region: {region}</div>
                      <div className="capital">Capital: {capital}</div>
                  </div>
              </div>
    </Link>
  )
}

export default Body





// import React, { useEffect, useState } from 'react'
// import Country from '../Countries/Country'

// function Body() {
//     const [countries, setcountries]= useState([])

// useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res=>{
//         return res.json();
//     })
//     .then(data=>{
//         console.log(data)
//         setcountries(data)
//     })
// })



//   return (
//     <div className='body'>
//         <Country countries={countries} />
//     </div>
//   )
// }

// export default Body
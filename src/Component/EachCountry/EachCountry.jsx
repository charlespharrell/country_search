import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './EachCountry.css'
import { Link } from 'react-router-dom';

function EachCountry({detai, back}) {
    const [country, setcountry]= useState([]);
    let {name} = useParams();

    useEffect(()=>{
        const getEachCountry = async ()=>{
            try {
                   const res = await fetch (`https://restcountries.com/v3.1/name/${name}`)
                   const data = await res.json()
                   setcountry(data)

              } catch (error) {
                console.error(error)
              }
            }
            getEachCountry();
        },[name])
    
  return <>
         <section className='detaii'>

            <Link to='/' className={back}>Back</Link>

            {country.map((item)=>(
                <div key={item.population} className={detai}>
                    <img src={item.flags.svg} alt='' />

                        <div className="details1">
                             <h2 className="idd">{item.name.official}</h2>  
                            <div className="c"> Region: {item.region}</div>
                            <div className="p"> Population: {item.population.toLocaleString()}</div>
                            <div className="sub-region">Sub-Region: {item.subregion}</div>
                            <div className="ca"> Capital: {item.capital}</div>       
                        </div> 

                        <div className="details2">
                            <div className="top">Top level Domain: {item.tld[0]}</div>
                            <div className="currency">Continent: {item.continents}</div>
                            <div className="language">Area: {item.area}</div>
                        </div> 
                    </div>
            ))
            }
             </section></> }

export default EachCountry
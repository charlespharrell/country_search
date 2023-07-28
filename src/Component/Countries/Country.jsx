import React from 'react'
import './Country.css'
import { useEffect, useState } from 'react'
import Body from '../Body/Body'

function Country({filter, search}) {
  const [countries, setcountries]= useState([])
  const [SearchText, setSearchText]= useState('')
  const regions = [
    {
      name:'Europe',
    },
    {
      name:'Asia',
    },
    {
      name:'Africa',
    },
    {
      name:'Oceania',
    },
    {
      name:'Americas',
    },
    {
      name:'Antarctic'
    }
  ]

  useEffect(()=>{
  const getCountries = async ()=>{
  try{
    const res = await fetch('https://restcountries.com/v3.1/all')
    const data = await res.json();
    setcountries(data);
  }
  catch (error){
    console.error(error)
  }
 }
 getCountries();
}, [])

async function searchCountry(){
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${SearchText}`)
    const data = await res.json()
    setcountries(data)
  } catch (error) {
    console.error(error)
  }
}

async function filterByRegion(region){
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${region}`
    );
    const data = await res.json();
    setcountries(data)
    
  } catch (error) {
    console.error(error)
  }
}

function handleSearch(e){
  e.preventDefault()
   searchCountry()
      }
function handlefilter(e){
    e.preventDefault();
    filterByRegion()
}
  return (
    <div >
      <form action="" autoComplete='off' onSubmit={handleSearch}>
        <input type="text"
         className={search}
          placeholder='Search a country' 
          required
          value={SearchText}
          onChange={(e)=>setSearchText(e.target.value)} />
      </form>

      <form action="" onSubmit={handlefilter} >
        <select name="filter"
         id="filter" 
         className={filter}
         value={regions.name}
         onChange={e=>filterByRegion(e.target.value)}>
          {regions.map((region, index)=>(
            <option key={index} value={region.name}>
              {region.name}
            </option>
          ))}
        </select>
      </form>
  
      <div className='countries'>
           {countries.map(country => (
            <Body key={country.name.common} {...country}/>
          ))
          } 
      </div>
        

    </div>  
  )
}

export default Country
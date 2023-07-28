import { useState } from 'react';
import './App.css';
import {FaMoon, FaSun, } from 'react-icons/fa'
import NavBar from './Component/NavBar/NavBar';
import Country from './Component/Countries/Country';
import { BrowserRouter, Route  } from 'react-router-dom';
import EachCountry from './Component/EachCountry/EachCountry';

function App() {
  const [icon, seticon]= useState(<FaMoon/>)
  const[isiconclicked, setisiconclicked]= useState(false)
  const[mode, setmode] =useState('Dark Mode')
  const [App, setApp]= useState('App')
  const[navbody, setnavbody]= useState('nav')
  const[detai, setdetai]= useState('detai')
  const [back, setback]=useState('back')
  const [filter, setfilter]=useState('filter')
  const [search, setsearch]=useState('search')

  const handlechangemode=()=>{
  setisiconclicked(!isiconclicked)
   if(!isiconclicked){
    seticon(<FaSun/>)
    setmode('Light Mode')
    setApp('App active')
    setnavbody('nav active')
    setdetai('detai active')
    setback('back active')
    setfilter('filter active')
    setsearch('search active')
  
   }
   else{
    seticon(<FaMoon/>)
    setmode('Dark mode')
    setApp('App')
    setnavbody('nav')
    setdetai('detai')
    setback('back')
    setfilter('filter')
    setsearch('search')
   }
  }
  return (
    <BrowserRouter>
     <body className={App}>
      <NavBar handlechangemode={handlechangemode} icon={icon} mode={mode} navbody={navbody}/>
       <div className="api">
        <Route exact path='/'><Country filter={filter} search={search}/></Route>
        <Route path ="/:name" ><EachCountry detai={detai} back={back}/></Route>    
          {/* <Search/> */}
      </div>
    </body>        
    </BrowserRouter>
  );
}

export default App;

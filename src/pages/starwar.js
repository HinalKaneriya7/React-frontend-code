import React, { useState, useEffect } from 'react';
import Banner from '../components/banner';
import Card from '../components/Card';
import '../custom.js';

export default function Starwar() {

  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch('https://swapi.dev/api/people');
      let data = await res.json();
        setPeople(data.results);
    }
      fetchPeople();
  },[]);

  let newUrl;
  let mainUrl;
  let lastSegment;

  return (
    <div className='home relative'>
      <Banner />

      <div className='bg-black relative max-w-[1150px] m-auto w-full pt-[150px] pb-[80px] text-black' id="people">
        <div className='container-black m-auto px-[80px] remove-pagi'>
          <h2 className='text-center text-[#fdf252] text-[60px]'>Star Wars People</h2>
          <div className='select-people text-right mt-[50px] mb-[70px]'>
          <select id="characterselector" className='invert border border-black p-[10px] min-w-[200px] rounded-[5px]'>
            <option value="all">All</option>
            {people.map(peoplename => (
            newUrl = peoplename.url,
             mainUrl = newUrl.slice(0, newUrl.lastIndexOf('/')),
             lastSegment = mainUrl.split("/").pop(),
              <option value={lastSegment}>{peoplename.name}</option>
            ))}
          </select>
          </div>
          <ul className='col-3'>
            
          {people.map(x => (
            newUrl = x.url,
            mainUrl = newUrl.slice(0, newUrl.lastIndexOf('/')),
             lastSegment = mainUrl.split("/").pop(),
             <Card url={lastSegment} key={x.name} name={x.name} height={x.height} mass={x.mass} hair_color={x.hair_color} skin_color={x.skin_color} gender={x.gender} birth_year={x.birth_year} />
             ))}
          </ul>
        </div>
        <div id="container"></div>
      </div>

    </div>
  )
}

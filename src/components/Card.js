import React from 'react';



export default function Card(props) {
  return (
    <>         
        <li id={props.url} className='pb-[30px] card-list'>
          <div className="entry">
            <h5 className="entry__header text-[#fdf252]">{props.name}</h5>
            <img src="https://zofiakorcz.pl/sw-explorer/img/characters/lukeskywalker.png" className="entry__img mb-[20px] pt-[10px]" alt="Luke Skywalker" />
            <p className="entry__info"><span className="entry__label">height:</span> {props.height}</p>
            <p className="entry__info"><span className="entry__label">Mass:</span> {props.mass}</p>
            <p className="entry__info"><span className="entry__label">hair color:</span> {props.hair_color}</p>
            <p className="entry__info"><span className="entry__label">skin color:</span> {props.skin_color}</p>
            <p className="entry__info"><span className="entry__label">Gender:</span> {props.gender}</p>
            <p className="entry__info"><span className="entry__label">birth year:</span> {props.birth_year}</p>
          </div>
        </li>
    </>
  )
}
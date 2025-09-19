
import React from 'react';
import './Country.css';

const Country = ({country}) => {
  console.log(country.area.area)
  
  const visitUpdate = () => {
    alert('visit')
  }

  return (
    <div className='country'>
      <img src={country.flags.flags.png} alt={country.flags.flags.png}></img>
      <h2>Name : {country.name.common} </h2>
      <p>Population : {country.population.population} </p>
      <p>Area : {country.area.area} <h3> Size : {country.area.area > 300000 ? "Big Country" : "Small country"}</h3></p>
      <button onClick={visitUpdate}>Not Visited : </button>
    </div>
  );
};

export default Country;
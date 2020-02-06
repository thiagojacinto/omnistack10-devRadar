import React, { useState } from 'react';
import ModalFoundDev from './ModalFoundDev';

export default function SearchForm(props) {

  var [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });
  var [techs, setTechs] = useState('');
  var [devs, setDevs] = useState({});

  function handleChange(event) {
    event.preventDefault();
    // gets value & target name (latitude or longitude)
    // const [ value, name ] = event.target;
    var name = event.target.name;
    var value = event.target.value;
    // console.log(`Name: ${name}, Value: ${value}`); // Verify
  
    if (name === 'latitude') { 
      setLocation({
        ...location,
        latitude: value
        });
    } else if (name === 'longitude') { 
      setLocation({
        ...location,
        longitude: value,
      });
    } else if (name === 'techs') setTechs(value.toString());
    else console.log("Error: `name` not found");
    
  };

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(`techs: ${techs}, lat: ${location.latitude} & long: ${location.longitude}`);
    
    const found = props.onSubmit({
      techs,
      latitude: location.latitude,
      longitude: location.longitude,
    });

    found
      .then(data => {

        console.log(data);
        data && data.data[0].length > 0 ? setDevs(data.data) : setDevs({});
      })
      
    // Clears input text
    setLocation({
      latitude: '',
      longitude: ''
    }); 
    setTechs('');
  }
  
  return (
    <>
    <form onSubmit={event => handleSubmit(event)}>
      <div className="input-group">

        <div className="input-block">
          <label htmlFor="latitude">Latitude:</label>
          <input 
            type="text" 
            name="latitude" 
            id="latitude--input" 
            required defaultValue={location.latitude}
            onChange = {event => handleChange(event)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude:</label>
          <input 
            type="text" 
            name="longitude" 
            id="longitude--input"
            required defaultValue = {location.longitude}
            onChange = {event => handleChange(event)}
          />
        </div>
      </div>
      
      <div className="input-block">
        <label htmlFor="search-techs">Tecnologias</label>
        <input 
          type="text" 
          name="techs" 
          id="searchbox--techs" 
          required defaultValue = {techs}
          onChange = {event => handleChange(event)}
        />
        <button 
          type="submit"
          data-toggle="modal" 
          data-target="#foundOrNotDev" 
        >Procurar</button>
      </div>

    </form>

    {/* Conditional rendering of Modal */}
    { devs && devs._id ? 
        <ModalFoundDev dev={devs} closeModal={props.closeModal} />
        : <ModalFoundDev dev={false} closeModal={props.closeModal} />
    }
    </>
  );
}
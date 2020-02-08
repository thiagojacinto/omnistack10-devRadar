import React, { useState } from 'react';
import FoundDevList from './FoundDevList';

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
    // console.log(`techs: ${techs}, lat: ${location.latitude} & long: ${location.longitude}`); // Verify
    
    const found = props.onSubmit({
      techs,
      latitude: location.latitude,
      longitude: location.longitude,
    });

    found
      .then(result => {
        // console.log(result);  // Verify
        result && result.data.length > 0 ? setDevs(result.data) : setDevs({});
      })
      
    // Clears input text
    setLocation({
      latitude: '',
      longitude: ''
    }); 
    setTechs('');
  }

  function closeFound(event) {
    event.preventDefault();

    setDevs({});  // Clears devs & closes the FoundDevList
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
            required value={location.latitude}
            onChange = {event => handleChange(event)}
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude:</label>
          <input 
            type="text" 
            name="longitude" 
            id="longitude--input"
            required value = {location.longitude}
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
          required value = {techs}
          onChange = {event => handleChange(event)}
        />
        <button type="submit">Procurar</button>
      </div>

    </form>

    {/* Conditional rendering of Modal */}
    { devs && devs.length > 0 ? 
      <div className="foundList swing-in-top-fwd">
        <FoundDevList devs={devs} close={closeFound}/>
      </div>
      : <></>
    }
    </>
  );
}
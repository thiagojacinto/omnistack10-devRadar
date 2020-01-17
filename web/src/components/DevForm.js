import React, { useState, useEffect } from 'react';


export default function DevForm({ onSubmit }) {

  var [githubUsername, setGithubUsername] = useState('');
  var [techs, setTechs] = useState('');
  var [latitude, setLatitude] = useState('');
  var [longitude, setLongitute] = useState('');

  // Only runs once 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);  // Verify
        const { latitude, longitude } = position.coords;
        // update state
        setLatitude(latitude);
        setLongitute(longitude);
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);
  
  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
      github_username: githubUsername,
      techs,
      latitude,
      longitude
    });

    setGithubUsername('');
    setTechs('');

  }

  function handleChange(e) {
    e.preventDefault();
    const [name, value] = e.target;

    if (name === 'latitude') setLatitude(value);
    else if (name === 'longitude') setLongitute(value);
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>

      <div className="input-block">
        <label htmlFor='github_username'>Usuário do GitHub</label>
        <input
          name='github_username'
          id='github_username'
          required
          value={githubUsername}
          onChange={e => setGithubUsername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor='techs'>Technologias</label>
        <input
          name='techs'
          id='techs'
          required
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />
      </div>

      <div className="input-group">
        <div className="input-block">
          <label htmlFor='latitude'>Latitude</label>
          <input type='number'
            name='latitude'
            id='latitude'
            required defaultValue={latitude}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="input-block">
          <label htmlFor='longitude'>Longitude</label>
          <input type='number'
            name='longitude'
            id='longitude'
            required defaultValue={longitude}
            onChange={e => handleChange(e)}
          />
        </div>
      </div>

      <button type='submit'>Salvar</button>
    </form>
  );
}

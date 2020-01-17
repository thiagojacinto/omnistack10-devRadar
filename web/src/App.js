import React, { useState, useEffect } from 'react';

import api from './services/api-call';

import './styles/global.css';
import './styles/App.css';
import './styles/Sidebar.css';

import DevCard from './components/DevCard';

// REACT FOR BEGINNERS:
// - Component: Isolated HTML, CSS or/and JS block that do not interferes in another element of the application;
// - Property: information that a super comoponent pass through a child component;
// - State: (immutability) Information dealt by the component;

function App() {

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

  function handleChange(e) {
    e.preventDefault();
    const [name, value] = e.target;

    if (name === 'latitude') setLatitude(value);
    else if (name === 'longitude') setLongitute(value);
  }

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/v1/devs', {
      github_username: githubUsername,
      techs,
      latitude,
      longitude
    });

    console.log(response); // Verify
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={e => handleAddDev(e)}>

          <div className="input-block">
            <label htmlFor='github_username'>Usuário do GitHub</label>
            <input 
              name='github_username' 
              id='github_username' 
              required 
              value = {githubUsername}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>
          <div className="input-block">
            <label htmlFor='techs'>Technologias</label>
            <input 
              name='techs' 
              id='techs' 
              required 
              value = {techs}
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
      </aside>

      <main>
        <ul>
          <DevCard />
          <DevCard />
          <DevCard />
        </ul>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import api from './services/api-call';

import './styles/global.css';
import './styles/App.css';
import './styles/Sidebar.css';

import DevList from './components/DevList';
import DevForm from './components/DevForm';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// REACT FOR BEGINNERS:
// - Component: Isolated HTML, CSS or/and JS block that do not interferes in another element of the application;
// - Property: information that a super comoponent pass through a child component;
// - State: (immutability) Information dealt by the component;

function App() {

  const [addedDev, setAddedDev] = useState(0);
  const [dev, setDev] = useState({});  

  async function handleSearchDev(event, id) {
    event.preventDefault();
    
    const foundDev = await api.get(`/v1/search/${id}`);
    
    setDev(foundDev.data);
    // console.log(dev); // Verify
  }

  function closeModal(event) {
    event.preventDefault();

    setDev();
  }

  async function handleAddDev(data) {
    // Send data to server:
    await api.post('/v1/devs', data);

    // Informs that new developer has been added.
    setAddedDev(addedDev + 1);
  }

  async function handleRemoveDev(data) {

    const { username } = data;
    // server call
    const deleted = await api.delete(`/v1/removedev/${username}`);
    // console.log(deleted); // Verify
    // Removes developers count:
    setAddedDev(addedDev - 1);
    setDev()

    return deleted;
  }

  async function handleSearchByTech(data) {
    const urlAttachment = `/v1/searchdev?techs=${data.techs}&latitude=${data.latitude}&longitude=${data.longitude}`;
    console.log(urlAttachment); // Verify

    // server call
    const techsCapable = await api.get(urlAttachment, data);
    // console.log(techsCapable); // Verify
    setDev(techsCapable.data[0]); 

    return techsCapable;
  }

  return (
    <>
    <Navbar 
      dev={dev}
      removeDev={handleRemoveDev} 
      handleSearchDev={handleSearchDev}
      closeModal={closeModal}
    />
    <div id='app'>
      <aside>
        <div className="register">

        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
        </div>
      {/* </aside>

      <aside> */}
      <div className="search-by-tech">

        <strong>Procurar</strong>
        <SearchForm onSubmit={handleSearchByTech} closeModal={closeModal}/>
      </div>
      </aside>

      <main>
        <ul>
          <DevList addedDev={addedDev}/>
        </ul>
      </main>
    </div>
    </>
  );
}

export default App;
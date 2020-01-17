import React, { useState } from 'react';

import api from './services/api-call';

import './styles/global.css';
import './styles/App.css';
import './styles/Sidebar.css';

import DevList from './components/DevList';
import DevForm from './components/DevForm';

// REACT FOR BEGINNERS:
// - Component: Isolated HTML, CSS or/and JS block that do not interferes in another element of the application;
// - Property: information that a super comoponent pass through a child component;
// - State: (immutability) Information dealt by the component;

function App() {

  const [addedDev, setAddedDev] = useState(0);

  async function handleAddDev(data) {
    // Send data to server:
    await api.post('/v1/devs', data);

    // Informs that new developer has been added.
    setAddedDev(addedDev + 1);
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          <DevList addedDev={addedDev}/>
        </ul>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import api from '../services/api-call';

import ModalFoundDev from './ModalFoundDev';

export default function Navbar() {

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

  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">DevRadar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">

            <a className="nav-item nav-link" href="/">Saiba mais<span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">Sua empresa</a>
            <button className="nav-item nav-link btn btn-outline-secondary" data-toggle="collapse" data-target="#search-by-id" aria-expanded="false" aria-controls="search-by-id">Procurar</button>
            <button className="nav-item nav-link btn btn-outline-secondary" data-toggle="collapse" data-target="#delete-by-username" aria-expanded="false" aria-controls="delete-by-username">Remover</button>

            <div id="advanced-inputs" className="my-2 my-lg-0">

              <form action="" className="form-inline nav-item collapse" id="search-by-id">

                <input className="nav-item form-control mr-md-4" type="search" placeholder="ID do Dev" aria-label="search-by-id" id="search-dev" />
                
                <button 
                  className="btn btn-outline-secondary" 
                  data-toggle="modal" 
                  data-target="#foundOrNotDev" 
                  type="button" 
                  onClick={event => handleSearchDev(event, document.getElementById('search-dev').value)}
                >
                  Procurar Dev
              </button>

              </form>

              <form action="" className="form-inline nav-item collapse" id="delete-by-username" >

                <input className="nav-item form-control mr-md-4" type="search" placeholder="Username" aria-label="delete-by-username" />
                
                <button 
                  className="btn btn-outline-danger" 
                  type="button" 
                >
                  Remover
                </button>

              </form>
            </div>

          </div>
        </div>
      </nav>
      { dev && dev._id ?
        <ModalFoundDev dev={dev} closeModal={closeModal}/>
        : <ModalFoundDev dev={false} closeModal={closeModal}/>
        // : <></>
      }
    </header>
  );
}

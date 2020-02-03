import React from 'react';
import ModalFoundDev from './ModalFoundDev';

export default function Navbar(props) {

  function handleDel(event) {
    event.preventDefault();

    const input = document.querySelector('#delete-input');
    // verify if text input is void:
    if (!input.value) return alert('Não é possível inserir vazio. Escreva o `usuário do GitHub` de algum desenvolvedor.')
    props.removeDev({username: input.value});
    console.log(`Username digitado no front: ${input.value}; `);
    
    // clears text input value
    input.value = '';
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
                  onClick={event => props.handleSearchDev(event, document.getElementById('search-dev').value)}
                >
                  Procurar Dev
              </button>

              </form>

              <form action="" className="form-inline nav-item collapse" id="delete-by-username" >

                <input 
                  id="delete-input" 
                  className="nav-item form-control mr-md-4" 
                  type="search" 
                  placeholder="Username" 
                  aria-label="delete-by-username" 
                />
                
                <button 
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={(event) => handleDel(event)}
                >
                  Remover
                </button>

              </form>
            </div>

          </div>
        </div>
      </nav>
      {/* Modal conditional rendering */}
      { props.dev && props.dev._id ?
        <ModalFoundDev dev={props.dev} closeModal={props.closeModal}/>
        : <ModalFoundDev dev={props.dev} closeModal={props.closeModal}/>
      }
    </header>
  );
}

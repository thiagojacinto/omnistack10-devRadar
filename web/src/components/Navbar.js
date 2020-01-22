import React from 'react';

export default function Navbar(props) {

  function handleSearchDev(event) {
    console.log(event);
    
  }

  return (
    <header className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="">DevRadar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">

            <a class="nav-item nav-link" href="#">Saiba mais<span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sua empresa</a>
            <button class="nav-item nav-link btn btn-outline-secondary" data-toggle="collapse" data-target="#search-by-id" aria-expanded="false" aria-controls="search-by-id">Procurar</button>
            <button class="nav-item nav-link btn btn-outline-secondary" data-toggle="collapse" data-target="#delete-by-username" aria-expanded="false" aria-controls="delete-by-username">Remover</button>

            <div id="advanced-inputs" className="my-2 my-lg-0">

              <form onSubmit={handleSearchDev} action="GET" className="form-inline nav-item collapse" id="search-by-id">

                <input class="nav-item form-control mr-md-4" type="search" placeholder="ID do Dev" aria-label="search-by-id" />
                <button class="btn btn-outline-secondary" type="button" >
                  Procurar Dev
              </button>

              </form>

              <form onSubmit={handleSearchDev} action="DELETE" className="form-inline nav-item collapse" id="delete-by-username" >

                <input class="nav-item form-control mr-md-4" type="search" placeholder="Username" aria-label="delete-by-username" />
                <button class="btn btn-outline-danger" type="button" >
                  Remover
              </button>

              </form>
            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}

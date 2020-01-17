import React from 'react';

import '../styles/Main.css';

export default function DevCard() {
  return (
    <li className="dev-item">

      <header>
        <img src='' alt='' />
        <div className="dev-info">
          <strong>NAME</strong>
          <span>TECHS</span>
        </div>
      </header>

      <p>BIO</p>
      <a href="http://github.com/thiagojacinto">Acessar perfil no GitHub</a>
    </li>
  );
}

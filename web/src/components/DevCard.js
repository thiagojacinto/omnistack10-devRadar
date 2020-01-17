import React from 'react';

import '../styles/Main.css';

export default function DevCard(props) {

  return (
    <li key={props.dev.id} className="dev-item">

      <header>
        <img src={props.dev.avatar_url} alt='Developer avatar' />
        <div className="dev-info">
          <strong>{props.dev.name}</strong>
          <span>{props.dev.techs.join(', ')}</span>
        </div>
      </header>

      <p>{props.dev.bio}</p>
      <a href={`https://github.com/` + props.dev.github_username}>Acessar perfil no GitHub</a>
    </li>
  );
}

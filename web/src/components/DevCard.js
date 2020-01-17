import React , { useState, useEffect } from 'react';

import '../styles/Main.css';

export default function DevCard(props) {

  var [link, setLink] = useState('');
  
  // creates github link with the username:
  useEffect(() => {
    const user = props.github_username;
    var git_link = `http://github.com/` + user;
    setLink(git_link);
  }, []);

  return (
    <li className="dev-item">

      <header>
        <img src={props.avatar_url} alt='Developer avatar image' />
        <div className="dev-info">
          <strong>{props.name}</strong>
          <span>{props.techs}</span>
        </div>
      </header>

      <p>{props.bio}</p>
      <a href={link}>Acessar perfil no GitHub</a>
    </li>
  );
}

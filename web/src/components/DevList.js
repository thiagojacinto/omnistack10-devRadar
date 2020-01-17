import React, { useState, useEffect } from 'react';

import DevCard from './DevCard';
import api from '../services/api-call';

export default function DevList(props) {

  var [devs, setDevs] = useState([]);
  
  useEffect(() => {
    // Async function to load developers:
    async function loadDevelopers() {
      const response = await api.get('/v1/devs');
      setDevs(response.data);
    };
    // Runs that function
    loadDevelopers();
  }, [props.addedDev]);


  return (
    <>
      {devs.map(dev => (
        <DevCard key={dev._id} dev={dev} />
      ))}
    </>
  );
}

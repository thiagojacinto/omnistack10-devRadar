import React from 'react';
import DevCard from './DevCard';

export default function FoundDevList(props) {

  return (
    <>
      {props.devs.map( dev => {
        <DevCard key={dev._id} dev={dev} />
      })}
    </>
  );
}

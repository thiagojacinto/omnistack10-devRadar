import React from 'react';
import DevCard from './DevCard';

export default function FoundDevList(props) {

  return (
    <>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={e => props.close(e)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      
      {props.devs.map(dev => {
        return <DevCard key={dev._id} dev={dev} />
      })}
    </>
  );
}

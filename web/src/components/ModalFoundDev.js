import React from 'react';

import DevCard from './DevCard';

export default function ModalFoundDev(props) {

  return (
    <>
      {/* <!-- Button trigger modal is in NAVBAR.JS --> */}
  
      {/* <!-- Modal --> */}
      <div className="modal fade" id="foundOrNotDev" tabIndex="-1" role="dialog" aria-labelledby="foundOrNotInfo" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="foundOrNotInfo">Developer</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.dev ? 
                <DevCard key={props.dev._id} dev={props.dev} /> 
                // <> </>
                : <p> {props.dev.name} </p>}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

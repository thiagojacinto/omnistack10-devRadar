import React from 'react';
import '../styles/ModalItem.css';

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
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
                aria-label="Close" 

                onClick={e => props.closeModal(e)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            
            { props && props.dev && props.type ? // TO DELETE 
              <>
                <p className="strong">Desenvolvedor removido:</p>
                {props.dev.username ?
                    <DevCard key={props.dev._id} dev={props.dev} />
                    : <><span>Nenhum desenvolvedor encontrado com o `username` informado. Tente novamente.</span></> }
              </>
              : props && props.dev && props.dev._id ?
                <DevCard key={props.dev._id} dev={props.dev} />
                : <><span>Nenhum desenvolvedor encontrado com o ID informado. Tente novamente.</span></>
            }
            </div>
          
            <div className="modal-footer">
              <button 
              type="button" 
              className="btn btn-secondary" 
              data-dismiss="modal"

              onClick={e => props.closeModal(e)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

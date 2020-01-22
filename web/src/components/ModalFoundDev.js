import React from 'react';

export default function ModalFoundDev(props) {

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#foundOrNotDev">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="foundOrNotDev" tabindex="-1" role="dialog" aria-labelledby="foundOrNotInfo" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="foundOrNotInfo">Developer</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

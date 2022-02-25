import React  from 'react';
import './Modal.css';

const ModalComponent = ({ item, isOpen, hide }) => {
  const showHideClassName = isOpen ? " display_b" : "display_n";
return (
  <div className={showHideClassName}>
  <div className='modal-overlay' />
      <div className='modal-wrapper'  role="dialog">
        <div className="modal">
          <div className="modal-header">
            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <h2>{item.website}</h2>
        </div>
      </div>
  </div>
)
}

export default ModalComponent;
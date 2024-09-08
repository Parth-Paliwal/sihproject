// Modal.js
import React from 'react';
import './Modal.css'; // Import the corresponding CSS file

const Modal = ({ result, handleCloseModal }) => {
  return (
    <div className="fertilizer-modal" id="confirmationModal">
      <div className="fertilizer-modal-content">
        <div className="fertilizer-modal-header">
          <h5 className="fertilizer-modal-title">Fertilizer Result</h5>
          <button type="button" className="fertilizer-btn-close" onClick={handleCloseModal}>
            X
          </button>
        </div>
        <div className="fertilizer-modal-body">
          Fertilizer: {result}
        </div>
        <div className="fertilizer-modal-footer">
          <button type="button" className="fertilizer-btn fertilizer-btn-primary" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


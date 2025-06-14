import React from "react";
import "./modal.css";

const Modal = ({ skip, onClose, onContinue }) => {
  if (!skip) return null;

  const { size, hire_period_days, price_before_vat } = skip;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-title">🚛 {size} Yard Skip</h2>
        <p className="modal-hire">
          🕒 <strong>{hire_period_days} day hire period</strong>
        </p>
        <p className="modal-price">💵 £{price_before_vat}</p>

        <p className="modal-note">
          <small>
            {" "}
            Imagery and information shown throughout this website may not
            reflect the exact shape or size specification. Colors may vary.
            Options and/or accessories may be featured at additional cost.
          </small>
        </p>

        <div className="modal-buttons">
          <button className="modal-button back" onClick={onClose}>
            Back
          </button>
          <button className="modal-button continue" onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

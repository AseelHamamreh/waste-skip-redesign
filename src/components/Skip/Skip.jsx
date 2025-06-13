import React from "react";
import "./Skip.css";

const Skip = ({ skip }) => {
  const { id, image, size, hire_period_days, price_before_vat, allowed_on_road } = skip;


  return (
    <div className="glass-card">
      <div className="image-wrapper">
        <img src={image} alt={`Skip ${id}`} className="glass-image" />
        <div className={`road-tag ${allowed_on_road ? "allowed" : "not-allowed"}`}>
          {allowed_on_road ? "Allowed On The Road" : "Not Allowed On The Road"}
        </div>
      </div>

      <div className="glass-info">
        <div className="info-left">
          <div className="info-item">
            <span className="icon">🚛</span>
            <span>{size} Yard Skip</span>
          </div>
          <div className="info-item">
            <span className="icon">🕒</span>
            <span>{hire_period_days} day hire period</span>
          </div>
          <div className="info-item">
            <span className="icon">💵</span>
            <span className="price">£{price_before_vat}</span>
          </div>
        </div>

        <button
          className="select-btn"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Skip;

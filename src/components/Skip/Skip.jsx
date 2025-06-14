import React from "react";
import "./skip.css";

const Skip = ({ skip, onSelect }) => {
  const { id, image, size, hire_period_days, price_before_vat, allowed_on_road } = skip;

  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className="glass-card" onClick={handleClick}>
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
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default Skip;

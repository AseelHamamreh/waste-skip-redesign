import React from "react";

const Skip = ({ skip }) => {
  const { id, image, size, hire_period_days, price_before_vat, allowed_on_road } = skip;

  return (
    <div>
        <img src={image} alt={`Skip ${id}`} />
        {allowed_on_road ? "Allowed On The Road" : "Not Allowed On The Road"}
        <p>{size}</p>
        <p>{hire_period_days}</p>
        <p>{price_before_vat}</p>
        <button> Select</button>   
    </div>
  );
};

export default Skip;
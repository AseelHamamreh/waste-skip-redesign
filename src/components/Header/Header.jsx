import React from "react";

const Header = () => {
  const steps = [
    "Postcode",
    "Waste Type",
    "Select Skip",
    "Permit Check",
    "Choose Date",
    "Payment",
  ];

  return (
    <header>
      <div>
        <h1>Header</h1>
        <nav>
          <ul>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

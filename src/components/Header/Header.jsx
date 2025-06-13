import React, { useState } from "react";
import "./Header.css"
import {
  MapPin,
  Trash2,
  Truck,
  FileCheck,
  Calendar,
  CreditCard,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const steps = [
    { name: "Postcode", icon: <MapPin size={18} />, status: "done" },
    { name: "Waste Type", icon: <Trash2 size={18} />, status: "done" },
    { name: "Select Skip", icon: <Truck size={18} />, status: "current" },
    { name: "Permit Check", icon: <FileCheck size={18} />, status: "pending" },
    { name: "Choose Date", icon: <Calendar size={18} />, status: "pending" },
    { name: "Payment", icon: <CreditCard size={18} />, status: "pending" },
  ];

  const getStepClass = (status) => {
    if (status === "done") return "step done clickable";
    if (status === "current") return "step current";
    return "step pending not-clickable";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section" onClick={toggleMenu} style={{cursor: 'pointer'}}>
          <img
            src="https://wewasteltd.co.uk/wp-content/uploads/2024/07/Untitled-design-4.png"
            alt="Logo"
            className="logo"
          />
          <div className="menu-icon">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
        <div className={`steps ${menuOpen ? "open" : "closed"}`}>
          {steps.map((step, index) => (
            <div className={getStepClass(step.status)} key={index}>
              {step.icon}
              <span>{step.name}</span>
              {step.status === "done" && (
                <CheckCircle size={14} className="check-icon" />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

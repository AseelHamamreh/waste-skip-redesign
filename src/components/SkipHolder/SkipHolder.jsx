import React, { useState, useEffect } from "react";
import Skip from "../Skip/Skip";
import localImages from "../../assets/localImages.json";
import "./skipHolder.css";
import Modal from "../Modal/Modal";

const Main = () => {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSkip, setSelectedSkip] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) throw new Error("Failed to fetch skips");
        const data = await response.json();

        const mergedSkips = data.map((apiSkip) => {
          const local = localImages.find((s) => s.id === apiSkip.id);
          return {
            ...apiSkip,
            image: local?.image || "/assets/default.jpg",
          };
        });

        setSkips(mergedSkips);
      } catch (error) {
        console.error("Error fetching skips:", error);
      }
    };

    fetchSkips();
  }, []);


  const handleSelect = (id) => {
    const skip = skips.find((s) => s.id === id);
    setSelectedId(id);
    setSelectedSkip(skip);
    setShowModal(false);
    setTimeout(() => setShowModal(true), 700);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleContinue = () => {
    alert("Continue clicked");
    setShowModal(false);
  };

  return (
    <main className="main-content">
      <h1>Choose Your Skip Size</h1>
      <p id="mainP">Select the skip size that best suits your needs</p>
      <hr />

      {skips.length === 0 ? (
        <p>Loading skips...</p>
      ) : (
        <>
          <div className="skip-grid four-cols">
            {skips.slice(0, 4).map((skip) => (
              <Skip
                key={skip.id}
                skip={skip}
                isSelected={selectedId === skip.id}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div className="skip-grid three-cols">
            {skips.slice(4, 7).map((skip) => (
              <Skip
                key={skip.id}
                skip={skip}
                isSelected={selectedId === skip.id}
                onSelect={handleSelect}
              />
            ))}
          </div>

          <div className="skip-grid two-cols">
            {skips.slice(7, 9).map((skip) => (
              <Skip
                key={skip.id}
                skip={skip}
                isSelected={selectedId === skip.id}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </>
      )}

      {showModal && selectedSkip && (
        <Modal
          skip={selectedSkip}
          onClose={handleCloseModal}
          onContinue={handleContinue}
        />
      )}

      
    </main>
  );
};

export default Main;

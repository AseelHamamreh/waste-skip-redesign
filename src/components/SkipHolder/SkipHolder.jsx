import React, { useState, useEffect } from "react";
import Skip from "../Skip/Skip";
import localImages from "../../assets/localImages.json";
import "./skipHolder.css";

const Main = () => {
  const [skips, setSkips] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
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
              />
            ))}
          </div>

          <div className="skip-grid three-cols">
            {skips.slice(4, 7).map((skip) => (
              <Skip
                key={skip.id}
                skip={skip}
              />
            ))}
          </div>

          <div className="skip-grid two-cols">
            {skips.slice(7, 9).map((skip) => (
              <Skip
                key={skip.id}
                skip={skip}
              />
            ))}
          </div>
        </>
      )}

    </main>
  );
};

export default Main;

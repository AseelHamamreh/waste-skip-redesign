import React, { useState, useEffect } from "react";
import Skip from "../Skip/Skip";
import localImages from "../../assets/localImages.json";

const SkipHolder = () => {
  const [skips, setSkips] = useState([]);

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
    <dev>
      <h1>Choose Your Skip Size</h1>
      <p>Select the skip size that best suits your needs</p>
      {skips.length === 0 ? (
        <p>Loading skips...</p>
      ) : (
        <div>
          {skips.map((skip) => (
            <Skip
              key={skip.id}
              skip={skip}
            />
          ))}
        </div>
      )}

    </dev>
  );
};

export default SkipHolder;

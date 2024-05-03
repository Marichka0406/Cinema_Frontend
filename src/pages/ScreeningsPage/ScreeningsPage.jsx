import React, { useState, useEffect } from "react";
import { getAllScreenings } from "../../services/screeningService";
import ScreeningsTable from "../../components/ScreeningsTable/ScreeningsTable";
import NavBar from "../../components/NavBar/NavBar"

const ScreeningsPage = () => {
  const [screenings, setScreenings] = useState([]);

  useEffect(() => {
    const fetchScreenings = async () => {
      try {
        const screeningsData = await getAllScreenings();
        setScreenings(screeningsData);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchScreenings();
  }, []);

  return (
    <>
      <NavBar />
      <ScreeningsTable screenings={screenings} />
    </>
  );
};

export default ScreeningsPage;

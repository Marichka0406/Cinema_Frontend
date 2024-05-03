import React, { useState, useEffect } from "react";
import { getAllPrices } from "../../services/pricesService";
import PricesTable from "../../components/PricesTable/PricesTable";
import NavBar from "../../components/NavBar/NavBar"

const PricesPage = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const pricesData = await getAllPrices();
        setPrices(pricesData);
      } catch (error) {
        console.error("Error fetching prices:", error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <>
      <NavBar />
      <PricesTable prices={prices} />
    </>
  );
};

export default PricesPage;

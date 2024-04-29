import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SeatsTable from "../../components/SeatsTable/SeatsTable";
import { getHallInfoByScreeningId } from "../../services/hallService"; // Шлях до сервісу
import { getTicketsByScreeningId } from "../../services/ticketService"; // Шлях до сервісу для отримання квитків

const BuyTicketsPage = () => {
  const [hall, setHall] = useState(null);
  const [existingTickets, setExistingTickets] = useState([]);
  const [ticketBought, setTicketBought] = useState(false);
  const { screeningId } = useParams();

  useEffect(() => {
    const fetchHallInfo = async () => {
      try {
        // Отримуємо інформацію про зал
        const hallInfo = await getHallInfoByScreeningId(screeningId);
        setHall(hallInfo.hall);

        // Отримуємо квитки для даного сеансу
        const tickets = await getTicketsByScreeningId(screeningId);
        setExistingTickets(tickets);
      } catch (error) {
        console.error("Error fetching hall information:", error);
      }
    };

    fetchHallInfo();
  }, [screeningId, ticketBought]);

  return (
    <>
      <NavBar />
      {hall ? <SeatsTable hall={hall} existingTickets={existingTickets} handleBuyTicket={setTicketBought}/> : <p>No hall information available</p>}
    </>
  );
};

export default BuyTicketsPage;

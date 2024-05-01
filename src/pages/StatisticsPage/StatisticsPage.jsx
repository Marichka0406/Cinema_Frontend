import React, { useState, useEffect } from "react";
import { styles } from "./StatisticsPage.styles";
import { Box } from "@mui/material";
import { StatisticsService } from "../../services/statisticsService";
import TicketsByTimeChart from "../../components/TicketsByTimeChart/TicketsByTimeChart";
import MovieTicketsCount from "../../components/MovieTicketsCount/MovieTicketsCount";
import NavBar from "../../components/NavBar/NavBar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const StatisticsPage = () => {
  const [ticketCountForLastMonth, setTicketCountForLastMonth] = useState(0);
  const [totalRevenueLastMonth, setTotalRevenueLastMonth] = useState(0);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const ticketCountData =
        await StatisticsService.getTicketCountForLastMonth();
      setTicketCountForLastMonth(ticketCountData.ticket_count);

      const revenueData = await StatisticsService.getTotalRevenueLastMonth();
      setTotalRevenueLastMonth(revenueData.total_revenue);
    } catch (error) {
      console.error("Error fetching statistics:", error);
    }
  };
  return (
    <>
      <NavBar />
      <Box sx={styles.topCharts}>
        <MovieTicketsCount />
        <TicketsByTimeChart />
      </Box>
      <Box sx={styles.bottomText}>
        <h2 style={styles.text}>Ticket Count for Last Month: {ticketCountForLastMonth}</h2>
        <h2 style={styles.text}>Total Revenue for Last Month: {totalRevenueLastMonth} ₴</h2>
      </Box>
    </>
  );
};

export default StatisticsPage;

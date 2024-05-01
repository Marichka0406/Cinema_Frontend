import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { StatisticsService } from '../../services/statisticsService';
import { styles } from './TicketsByTimeChart.styles';

const TicketsByTimeChart = () => {
  const [ticketCounts, setTicketCounts] = useState([]);

  useEffect(() => {
    fetchTicketCountsByTimeOfDay();
  }, []);

  const fetchTicketCountsByTimeOfDay = async () => {
    try {
      const data = await StatisticsService.getTicketCountsByTimeOfDay();
      console.log(data)
      setTicketCounts(data);
    } catch (error) {
      console.error('Error fetching ticket counts by time of day:', error);
    }
  };

  const labels = ['Daytime', 'Evening'];
  const ticketCountsData = [ticketCounts.day_tickets, ticketCounts.evening_tickets];
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.text}>Ticket Counts by Time of Day</h2>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: ticketCountsData,
              backgroundColor: ['#880E4F', '#673AB7'],
              hoverBackgroundColor: ['#880E4F', '#673AB7'],
            },
          ],
        }}
      />
    </div>
  );
};

export default TicketsByTimeChart;

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { StatisticsService } from '../../services/statisticsService';
import { styles } from './MovieTicketsCount.styles';

const MovieTicketsCount = () => {
  const [ticketCounts, setTicketCounts] = useState([]);

  useEffect(() => {
    const fetchTicketCountPerMovie = async () => {
      try {
        const data = await StatisticsService.getTicketCountPerMovie();
        setTicketCounts(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching ticket count per movie:', error);
      }
    };

    fetchTicketCountPerMovie();
  }, []);

  const movieTitles = ticketCounts.map((data) => data.movie_title);
  const ticketCountsData = ticketCounts.map((data) => data.ticket_count);

  return (
    <div style ={styles.wrapper}>
      <h2 style={styles.text}>Ticket Counts by Movie</h2>
      <Bar
        data={{
          labels: movieTitles,
          datasets: [
            {
              label: 'Ticket Count',
              data: ticketCountsData,
              backgroundColor: "#880E4F",
              borderColor: "#880E4F",
            }
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              beginAtZero: true,
            }
          }
        }}
        id="bar-chart" // Унікальний ідентифікатор канвасу
      />
    </div>
  );
};

export default MovieTicketsCount;

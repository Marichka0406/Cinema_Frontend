import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styles } from "./SeatsTable.styles";
import BuyTicketModal from "../BuyTicketModal/BuyTicketModal";

const SeatsTable = ({ hall, existingTickets}) => {
  const { name, rows } = hall;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedSeat, setSelectedSeat] = React.useState(null);

  const handleSeatClick = (rowId, seatId) => {
    setSelectedSeat({ rowId, seatId });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSeat(null);
  };

  
  const isTicketExisting = (seatId) => {  
    return !!existingTickets?.some(ticket => ticket.seat_id === seatId);
  };

  return (
    <>
      <Typography sx={styles.hallName} variant="h4" align="center" gutterBottom>Hall {name}</Typography>
      <TableContainer component={Paper} sx={styles.tableWrapper}>
        <Table sx={{ ...styles.table, minWidth: isSmallScreen ? 100 : 300 }} aria-label="seats table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.headText} align="center">Row</TableCell>
              <TableCell sx={styles.headText} align="center">Seats</TableCell>
              <TableCell sx={styles.headText} align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={styles.cellText} align="center">{row.number}</TableCell>
                <TableCell align="center" sx={styles.buttons}>
                  {row.seats.map((seat) => (
                    <Button
                    sx={{  
                        minWidth: 80,
                        padding: "8px 16px",
                        borderRadius: 4,
                        border:  '2px solid green',
                        color: 'green',
                        "&:hover": {
                          backgroundColor:  'green',
                          color: 'white',
                        },
                        "&.Mui-disabled": { 
                          backgroundColor: 'red',
                          color: 'white',
                          border: '2px solid red',
                        },
                      }}
                      key={seat.id}
                      variant="outlined"
                      disabled={isTicketExisting(seat.id)}
                      onClick={() => handleSeatClick(row.id, seat.id)} 
                    >
                      {seat.number}
                    </Button>
                  ))}
                </TableCell>
                <TableCell sx={styles.cellText} align="center">
                  <Typography component="span" variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {row.price ? `${row.price} ₴` : "N/A"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BuyTicketModal isOpen={isModalOpen} onClose={handleCloseModal} seatId={selectedSeat ? selectedSeat.seatId : null} />
    </>
  );
};

export default SeatsTable;

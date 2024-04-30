import React from "react";
import { useParams } from "react-router-dom";
import { Modal, Button, Typography, IconButton } from "@mui/material";
import { styles } from "./BuyTicketModal.styles";
import CloseIcon from "@mui/icons-material/Close";
import { createTicket } from "../../services/ticketService"; // Імпортуємо сервіс для створення квитка

const BuyTicketModal = ({ isOpen, onClose, seatId }) => {
  const { screeningId } = useParams();

  const handleBuyTicketClick = async () => {
    try {
      const userId = sessionStorage.getItem("userId");
      // Виконуємо логіку покупки квитка, викликаючи сервіс createTicket
      await createTicket({ seat_id: seatId, user_id: userId, screening_id: screeningId });
      console.log(`Ticket bought successfully for seat ${seatId}`);
      window.location.reload(); 
      onClose();
    } catch (error) {
      console.error("Error buying ticket:", error);
      // Обробляємо помилку покупки квитка
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="buy-ticket-modal-title"
      aria-describedby="buy-ticket-modal-description"
    >
      <div style={styles.modalContainer}>
        <IconButton aria-label="close" onClick={onClose} sx={styles.closeButton}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" align="center" sx={styles.modalTitle}>
          Buy A Ticket?
        </Typography>
        <Typography variant="body1" align="center" sx={styles.modalDescription}>
          Are you sure you want to buy a ticket?
        </Typography>
        <Button onClick={handleBuyTicketClick} variant="contained" color="primary" sx={styles.modalButton}>
          OK
        </Button>
      </div>
    </Modal>
  );
};

export default BuyTicketModal;

import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styles } from "./PricesModal.styles";

const PricesModal = ({ open, handleClose, priceData, setPriceData, onSave, selectedPrice }) => {
  const handleCloseModal = () => {
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPriceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave({ ...priceData, price: parseFloat(priceData.price) });
    window.location.reload(); // Перетворення введеного значення ціни в число
  };

  return (
    <Modal open={open} onClose={handleCloseModal}>
      <Box sx={styles.modalWrapper}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Close sx={{ cursor: "pointer", borderRadius: "50%" }} onClick={handleCloseModal} />
        </Box>
        <Typography variant="h6" sx={styles.mainTitle} gutterBottom>
          {selectedPrice ? "Edit Price" : "Add Price"}
        </Typography>
        <TextField
          label="Price"
          name="price"
          type="number"
          value={priceData.price}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 1 }}
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={styles.saveButton}
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            Save
          </Button>
          <Button
            sx={{ ...styles.cancelButton, ml: 2 }}
            onClick={handleCloseModal}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PricesModal;

import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { Edit as EditIcon, Search as SearchIcon, SaveAlt as SaveAltIcon } from "@mui/icons-material";
import { styles } from "./PricesTable.styles";
import PricesModal from "../PricesModal/PricesModal";
import { getAllPrices, updatePrice } from "../../services/pricesService";

const PricesTable = ({ prices }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [priceData, setPriceData] = useState({ price: "" });
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    fetchData(selectedDate, selectedTime);
  }, [selectedDate, selectedTime]);

  const fetchData = async (date, time) => {
    try {
      setLoading(true);
      await getAllPrices();
      setLoading(false);
    } catch (error) {
      console.error("Error fetching prices:", error);
      setLoading(false);
    }
  };

  const handleOpenModal = (price) => {
    setSelectedPrice(price);
    if (price) {
      setPriceData({ price: price.price });
    } else {
      setPriceData({ price: "" });
    }
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedPrice(null);
    setOpenModal(false);
  };

  const handleUpdatePrice = async () => {
    try {
      await updatePrice(selectedPrice.id, priceData);
      window.location.reload();
      handleCloseModal();
    } catch (error) {
      console.error("Error updating price:", error);
    }
  };

  const handleSavePrice = async () => {
    handleUpdatePrice();
  };

  const handleExportToJson = () => {
    const jsonPrices = JSON.stringify(prices, null, 2);
    const blob = new Blob([jsonPrices], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "prices.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredPricesByDateAndTime = prices.filter(
    (price) =>
      price.Screening.date_time.includes(selectedDate) &&
      new Date(price.Screening.date_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }).includes(selectedTime) &&
      price.Screening.movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPrices = [...filteredPricesByDateAndTime].sort((a, b) => {
    const dateA = new Date(a.Screening.date_time);
    const dateB = new Date(b.Screening.date_time);
    return dateB - dateA;
  });

  return (
    <>
      <div style={{ ...styles.topContainer, marginTop: "75px" }}>
        <Button
          sx={styles.button}
          onClick={handleExportToJson}
          variant="outlined"
          color="primary"
          startIcon={<SaveAltIcon />}
        >
          Export
        </Button>
        <TextField
          label="Search by Movie Title"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon sx={{ color: "#673AB7" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ ...styles.searchBar, width: "250px" }}
        />
        <TextField
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          sx={styles.searchBar}
        />
        <TextField
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          sx={styles.searchBar}
        />
      </div>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <CircularProgress />
        </div>
      ) : (
        <TableContainer component={Paper} sx={{ marginLeft: "10px", marginTop: "10px" }}>
          <Table>
            <TableHead>
              <TableRow sx={styles.headerText}>
                <TableCell sx={styles.headerText} align="center">ID</TableCell>
                <TableCell sx={styles.headerText} align="center">Screening</TableCell>
                <TableCell sx={styles.headerText} align="center">Row</TableCell>
                <TableCell sx={styles.headerText} align="center">Price</TableCell>
                <TableCell sx={styles.headerText} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedPrices.map((price) => (
                <TableRow key={price.id}>
                  <TableCell sx={styles.mainText} align="center">{price.id}</TableCell>
                  <TableCell sx={styles.mainText}>
                    {price.Screening.date_time && price.Screening.movie.title ? new Date(price.Screening.date_time).toLocaleDateString() + " " + new Date(price.Screening.date_time).toLocaleTimeString([], { timeZone: "UTC" }) + " - " + price.Screening.movie.title : "-"}
                  </TableCell>
                  <TableCell sx={styles.mainText} align="center">{price.Row.number}</TableCell>
                  <TableCell sx={styles.mainText} align="center">{price.price} ₴</TableCell>
                  <TableCell align="center">
                    <EditIcon sx={styles.actionIcon} onClick={() => handleOpenModal(price)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <PricesModal
        open={openModal}
        handleClose={handleCloseModal}
        priceData={priceData}
        setPriceData={setPriceData}
        onSave={handleSavePrice}
        selectedPrice={selectedPrice}
      />
    </>
  );
};

export default PricesTable;

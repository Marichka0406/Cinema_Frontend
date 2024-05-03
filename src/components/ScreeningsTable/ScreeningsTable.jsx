import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Modal,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Edit as EditIcon,
  Add as AddIcon,
  SaveAlt as SaveAltIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { styles } from "./ScreeningsTable.styles";
import { deleteScreening } from "../../services/screeningService";
import ScreeningModal from "../ScreeningsModal/ScreeningsModal";

const ScreeningsTable = ({ screenings }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedScreening, setSelectedScreening] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const userRole = sessionStorage.getItem("role");
  const isSuperAdmin = userRole === "SuperAdmin";

  const handleOpenModal = (screening) => {
    setSelectedScreening(screening);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedScreening(null);
    setOpenModal(false);
  };

  const handleAddScreening = () => {
    setSelectedScreening(null);
    setOpenModal(true);
  };

  const handleDeleteScreening = async (screeningId) => {
    try {
      await deleteScreening(screeningId);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDateTime = (isoDateTime) => {
    const date = new Date(isoDateTime);
    const formattedDate = `${String(date.getUTCDate()).padStart(2, "0")}.${String(
      date.getUTCMonth() + 1
    ).padStart(2, "0")}.${date.getUTCFullYear()}`;
    const formattedTime = `${String(date.getUTCHours()).padStart(2, "0")}:${String(
      date.getUTCMinutes()
    ).padStart(2, "0")}`;
    return `${formattedDate} ${formattedTime}`;
  };

  const handleExportScreenings = () => {
    const exportData = JSON.stringify(screenings);
    const blob = new Blob([exportData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "screenings.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSearchByTitle = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const filteredScreenings = screenings.filter(screening =>
    screening.movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedScreenings = filteredScreenings.sort((a, b) => {
    const dateA = new Date(a.date_time);
    const dateB = new Date(b.date_time);
    return dateB - dateA;
  });

  return (
    <>
      <Box sx={styles.topContainer}>
        <Button
          onClick={handleAddScreening}
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
          sx={styles.button}
        >
          Add Screening
        </Button>
        <Button
          onClick={handleExportScreenings}
          startIcon={<SaveAltIcon />}
          variant="outlined"
          color="primary"
          sx={styles.button}
        >
          Export
        </Button>
        <TextField
          label="Search by Movie Title"
          value={searchQuery}
          onChange={handleSearchByTitle}
          variant="outlined"
          sx={styles.searchBar}
        />
      </Box>
      <TableContainer
        component={Paper}
        sx={{ marginTop: "20px", marginLeft: "10px" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={styles.headerText}>ID</TableCell>
              <TableCell align="center" sx={styles.headerText}>Hall</TableCell>
              <TableCell align="center" sx={styles.headerText}>Date</TableCell>
              <TableCell align="center" sx={styles.headerText}>Movie Title</TableCell>
              <TableCell align="center" sx={styles.headerText}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedScreenings.map((screening) => (
              <TableRow key={screening.id}>
                <TableCell align="center" sx={styles.mainText}>{screening.id}</TableCell>
                <TableCell align="center" sx={styles.mainText}>{screening.Hall.name}</TableCell>
                <TableCell align="center" sx={styles.mainText}>{formatDateTime(screening.date_time)}</TableCell>
                <TableCell  sx={styles.mainText}>{screening.movie.title}</TableCell>
                <TableCell align="center" sx={styles.mainText}>
                  <Button onClick={() => handleOpenModal(screening)}>
                    <EditIcon sx={styles.actionIcon}/>
                  </Button>
                  <Button 
                    onClick={() => handleDeleteScreening(screening.id)} 
                    disabled={!isSuperAdmin}
                  >
                    <DeleteIcon sx={{...styles.actionIcon,cursor: isSuperAdmin ? "pointer" : "not-allowed"}}/>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <ScreeningModal
        open={openModal}
        handleClose={handleCloseModal}
        screening={selectedScreening}
      />
    </>
  );
};

export default ScreeningsTable;

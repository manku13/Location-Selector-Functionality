import React from "react";
import { Modal, Button, Typography } from "@mui/material";

const LocationPermissionModal = ({ open, onEnableLocation, onSearchManually }) => (
    <Modal open={open} onClose={() => {}} >
        <div style={{
            padding: 20,
            backgroundColor: "white",
            margin: "15% auto",
            width: "300px",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)"
        }}>
            <Typography variant="h6" style={{ marginBottom: 20 }}>Enable Location Services</Typography>
            <Typography variant="body2" style={{ marginBottom: 20 }}>
                We need your location to proceed with delivery.
            </Typography>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={onEnableLocation} 
                fullWidth
                style={{ marginBottom: 10 }}>
                Enable Location
            </Button>
            <Button 
                variant="outlined" 
                color="secondary" 
                onClick={onSearchManually} 
                fullWidth>
                Search Manually
            </Button>
        </div>
    </Modal>
);

export default LocationPermissionModal;

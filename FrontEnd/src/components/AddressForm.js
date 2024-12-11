import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, Grid } from "@mui/material";

const AddressForm = ({ onSave }) => {
    const [address, setAddress] = useState({ house: "", area: "", category: "Home" });

    const handleChange = (e) => setAddress({ ...address, [e.target.name]: e.target.value });

    const saveAddress = () => {
        onSave(address);
        alert("Address Saved!");
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <TextField
                        label="House/Flat/Block No."
                        name="house"
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Apartment/Road/Area"
                        name="area"
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item>
                    <Select
                        name="category"
                        value={address.category}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    >
                        <MenuItem value="Home">Home</MenuItem>
                        <MenuItem value="Office">Office</MenuItem>
                        <MenuItem value="Friends & Family">Friends & Family</MenuItem>
                    </Select>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={saveAddress}
                        fullWidth
                        style={{ marginTop: 20 }}
                    >
                        Save Address
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddressForm;

import React from "react";
import { Button } from "@mui/material";

const AddressManagement = ({ addresses, onDelete }) => (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px", backgroundColor: "#fff", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
        <h2>Manage Addresses</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
            {addresses.map((address, index) => (
                <li key={index} style={{ paddingBottom: "10px", borderBottom: "1px solid #ddd" }}>
                    <p>{address.category}: {address.house}, {address.area}</p>
                    <Button 
                        variant="outlined" 
                        color="secondary" 
                        onClick={() => onDelete(index)} 
                        style={{ marginTop: 10 }}
                    >
                        Delete
                    </Button>
                </li>
            ))}
        </ul>
    </div>
);

export default AddressManagement;

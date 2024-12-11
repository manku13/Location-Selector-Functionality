import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Button, Grid, CircularProgress, Snackbar } from "@mui/material";

const GeolocationSelector = ({ onLocationSelect }) => {
    const [center, setCenter] = useState({ lat: 40.7128, lng: -74.0060 });
    const [markerPosition, setMarkerPosition] = useState(center);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const locateMe = () => {
        setIsLoading(true);
        setError(null);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setCenter({ lat: latitude, lng: longitude });
                setMarkerPosition({ lat: latitude, lng: longitude });
                onLocationSelect({ lat: latitude, lng: longitude });
                setIsLoading(false);
            },
            (error) => {
                setError(error.message);
                setIsLoading(false);
                setOpenSnackbar(true);
            }
        );
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                    center={center}
                    zoom={12}
                    mapContainerStyle={{
                        height: "400px",
                        width: "100%",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <Marker
                        position={markerPosition}
                        draggable={true}
                        onDragEnd={(e) => setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
                    />
                </GoogleMap>
            </LoadScript>

            {/* Grid Container for the layout */}
            <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: 10 }}>
                <Grid item>
                    {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={locateMe}
                            style={{ padding: "10px 20px" }}
                        >
                            Locate Me
                        </Button>
                    )}
                </Grid>
                <Grid item>
                    {/* Re-center Button */}
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => setCenter(markerPosition)}
                        style={{ padding: "10px 20px" }}
                    >
                        Re-center Map
                    </Button>
                </Grid>
            </Grid>

            {/* Snackbar for error messages */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={`Error: ${error}`}
            />
        </div>
    );
};

export default GeolocationSelector;

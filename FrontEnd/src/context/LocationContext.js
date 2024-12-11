import React, { createContext, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);

    const addLocation = (location) => setLocations([...locations, location]);
    const removeLocation = (index) => setLocations(locations.filter((_, i) => i !== index));

    return (
        <LocationContext.Provider value={{ locations, addLocation, removeLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export default LocationContext;

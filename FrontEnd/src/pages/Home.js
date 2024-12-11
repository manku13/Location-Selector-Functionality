import React, { useState, useContext } from "react";
import LocationPermissionModal from "../components/LocationPermissionModal";
import GeolocationSelector from "../components/GeolocationSelector";
import AddressForm from "../components/AddressForm";
import LocationContext from "../context/LocationContext";

const Home = () => {
    const { addLocation } = useContext(LocationContext);
    const [showModal, setShowModal] = useState(true);

    return (
        <div>
            <LocationPermissionModal
                open={showModal}
                onEnableLocation={() => setShowModal(false)}
                onSearchManually={() => setShowModal(false)}
            />
            <GeolocationSelector onLocationSelect={(location) => console.log(location)} />
            <AddressForm onSave={(address) => addLocation(address)} />
        </div>
    );
};

export default Home;

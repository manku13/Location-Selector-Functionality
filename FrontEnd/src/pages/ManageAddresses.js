import React, { useContext } from "react";
import AddressManagement from "../components/AddressManagement";
import LocationContext from "../context/LocationContext";

const ManageAddresses = () => {
    const { locations, removeLocation } = useContext(LocationContext);

    return <AddressManagement addresses={locations} onDelete={removeLocation} />;
};

export default ManageAddresses;

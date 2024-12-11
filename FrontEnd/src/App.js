import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ManageAddresses from "./pages/ManageAddresses";
import { LocationProvider } from "./context/LocationContext";

const App = () => (
    <Router>
        <LocationProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manage" element={<ManageAddresses />} />
            </Routes>
        </LocationProvider>
    </Router>
);

export default App;

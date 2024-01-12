import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavBar from "./components/MyNavBar";
import Search from "./components/Search";
import DetailsPage from "./components/DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  
  const updateLocation = (newCity, newLatitude, newLongitude) => {
    setCity(newCity);
    setLatitude(newLatitude);
    setLongitude(newLongitude);
  };

  

  return (
    <div className="App">
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Search updateLocation={updateLocation}  />} />
          <Route path="/details" element={<DetailsPage city={city} latitude={latitude} longitude={longitude} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
